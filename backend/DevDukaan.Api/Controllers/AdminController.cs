using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DevDukaan.Api.Data;
using DevDukaan.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace DevDukaan.Api.Controllers;

[ApiController]
[Route("api/admin")]
public class AdminController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IConfiguration _configuration;

    public AdminController(AppDbContext db, IConfiguration configuration)
    {
        _db = db;
        _configuration = configuration;
    }

    [AllowAnonymous]
    [HttpPost("auth/login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var user = await _db.AdminUsers.FirstOrDefaultAsync(u => u.UserName == request.UserName && u.IsActive);
        if (user is null)
        {
            return Unauthorized(new { message = "Invalid username or password." });
        }

        var passwordValid = BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash);
        if (!passwordValid)
        {
            return Unauthorized(new { message = "Invalid username or password." });
        }

        var token = GenerateJwtToken(user);
        return Ok(new { token, expiresAtUtc = DateTime.UtcNow.AddMinutes(60) });
    }

    [Authorize]
    [HttpGet("auth/me")]
    public IActionResult Me()
    {
        return Ok(new { userName = User.Identity?.Name ?? "admin", authenticated = true });
    }

    [Authorize]
    [HttpGet("dashboard")]
    public async Task<IActionResult> GetDashboard()
    {
        var metrics = new
        {
            totalInquiries = await _db.Inquiries.CountAsync(),
            newInquiries = await _db.Inquiries.CountAsync(i => i.Status == "New"),
            qualifiedLeads = await _db.Inquiries.CountAsync(i => i.Status == "Discussion Scheduled" || i.Status == "Proposal Sent" || i.Status == "In Progress"),
            publishedProjects = await _db.Projects.CountAsync(p => p.IsPublished),
            configuredServices = await _db.Services.CountAsync(s => s.IsEnabled),
            publishedDemos = 3,
            recentInquiries = await _db.Inquiries.OrderByDescending(i => i.CreatedAtUtc).Take(5).ToListAsync()
        };

        return Ok(metrics);
    }

    [Authorize]
    [HttpGet("inquiries")]
    public async Task<IActionResult> GetInquiries()
    {
        var inquiries = await _db.Inquiries
            .OrderByDescending(i => i.CreatedAtUtc)
            .ToListAsync();

        return Ok(inquiries);
    }

    [Authorize]
    [HttpGet("projects")]
    public async Task<IActionResult> GetProjects()
    {
        var projects = await _db.Projects
            .OrderBy(p => p.DisplayOrder)
            .ToListAsync();

        return Ok(projects);
    }

    [Authorize]
    [HttpPatch("inquiries/{id:int}")]
    public async Task<IActionResult> UpdateInquiry(int id, [FromBody] UpdateInquiryRequest request)
    {
        var inquiry = await _db.Inquiries.FirstOrDefaultAsync(i => i.Id == id);
        if (inquiry is null)
        {
            return NotFound(new { message = "Inquiry was not found." });
        }

        if (!string.IsNullOrWhiteSpace(request.Status))
        {
            inquiry.Status = request.Status;
        }

        inquiry.UpdatedAtUtc = DateTime.UtcNow;
        await _db.SaveChangesAsync();

        return Ok(new { message = "Inquiry updated.", inquiry });
    }

    [AllowAnonymous]
    [HttpGet("health")]
    public IActionResult Health() => Ok(new { status = "ok" });

    private string GenerateJwtToken(AdminUser user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"] ?? "ChangeThisKeyToAStrongProductionKey1234567890"));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
        };

        var token = new JwtSecurityToken(
            issuer: _configuration["JwtSettings:Issuer"] ?? "DevDukaan.Api",
            audience: _configuration["JwtSettings:Audience"] ?? "DevDukaan.Web",
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(60),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}

public class LoginRequest
{
    public string UserName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

public class UpdateInquiryRequest
{
    public string? Status { get; set; }
}
