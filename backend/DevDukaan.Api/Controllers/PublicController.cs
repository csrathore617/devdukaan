using System.ComponentModel.DataAnnotations;
using DevDukaan.Api.Data;
using DevDukaan.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevDukaan.Api.Controllers;

[ApiController]
[Route("api/public")]
public class PublicController : ControllerBase
{
    private readonly AppDbContext _db;

    public PublicController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet("site-settings")]
    public IActionResult GetSiteSettings()
    {
        return Ok(new
        {
            brandName = "DevDukaan.in",
            owner = "Chetan Singh",
            location = "Jaipur, Rajasthan, India",
            businessEmail = "hello@devdukaan.in",
            whatsappNumber = "+91 98XXX XXXXX",
            phone = "+91 98XXX XXXXX",
            domain = "https://devdukaan.in",
            linkedin = "https://www.linkedin.com",
            instagram = "https://www.instagram.com",
            github = "https://github.com"
        });
    }

    [HttpGet("services")]
    public async Task<IActionResult> GetServices()
    {
        var services = await _db.Services
            .Where(s => s.IsEnabled)
            .OrderBy(s => s.DisplayOrder)
            .ToListAsync();

        return Ok(services);
    }

    [HttpGet("projects")]
    public async Task<IActionResult> GetProjects()
    {
        var projects = await _db.Projects
            .Where(p => p.IsPublished)
            .OrderBy(p => p.DisplayOrder)
            .ToListAsync();

        return Ok(projects);
    }

    [HttpGet("projects/{slug}")]
    public async Task<IActionResult> GetProject(string slug)
    {
        var project = await _db.Projects
            .FirstOrDefaultAsync(p => p.Slug == slug && p.IsPublished);

        if (project is null)
        {
            return NotFound(new { message = "Project not found." });
        }

        return Ok(project);
    }

    [HttpGet("demos")]
    public IActionResult GetDemos()
    {
        return Ok(new[]
        {
            new { id = 1, name = "Local Service Studio", industry = "Local business", status = "concept", demoUrl = "https://example.com/demo/local-service" },
            new { id = 2, name = "Modern Table", industry = "Restaurant", status = "concept", demoUrl = "https://example.com/demo/modern-table" },
            new { id = 3, name = "Fjord Commerce", industry = "E-commerce", status = "concept", demoUrl = "https://example.com/demo/fjord-commerce" }
        });
    }

    [HttpGet("faqs")]
    public IActionResult GetFaqs()
    {
        return Ok(new[]
        {
            new { question = "Do you build custom websites and software from scratch?", answer = "Yes. I create tailored front-end and back-end solutions for your specific business requirements." },
            new { question = "Can you work with existing sites or redesign outdated ones?", answer = "Yes. I can review, redesign, optimize, and rebuild your current website or app to improve clarity and conversion." },
            new { question = "Do you offer support after launch?", answer = "Yes, maintenance and optimization can be included depending on the scope and agreement." }
        });
    }

    [HttpPost("inquiries")]
    public async Task<IActionResult> CreateInquiry([FromBody] CreateInquiryRequest request)
    {
        if (!ModelState.IsValid)
        {
            return ValidationProblem(ModelState);
        }

        var inquiry = new Inquiry
        {
            ReferenceId = $"INQ-{DateTime.UtcNow:yyyyMMddHHmmss}-{Random.Shared.Next(100, 999)}",
            FullName = request.FullName,
            Email = request.Email,
            ProjectType = request.ProjectType,
            ProjectDescription = request.ProjectDescription,
            PreferredContactMethod = request.PreferredContactMethod,
            PhoneNumber = request.PhoneNumber,
            CompanyName = request.CompanyName,
            ExistingWebsiteUrl = request.ExistingWebsiteUrl,
            EstimatedBudget = request.EstimatedBudget,
            ExpectedTimeline = request.ExpectedTimeline,
            PreferredCommunicationTime = request.PreferredCommunicationTime,
            ReferenceWebsites = request.ReferenceWebsites,
            RequiredFeatures = request.RequiredFeatures,
            AdditionalNotes = request.AdditionalNotes,
            SourcePage = request.SourcePage,
            UtmSource = request.UtmSource,
            UtmMedium = request.UtmMedium,
            UtmCampaign = request.UtmCampaign,
            Status = "New"
        };

        _db.Inquiries.Add(inquiry);
        await _db.SaveChangesAsync();

        return Ok(new { success = true, referenceId = inquiry.ReferenceId, id = inquiry.Id });
    }
}

public class CreateInquiryRequest
{
    [Required]
    public string FullName { get; set; } = string.Empty;

    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string ProjectType { get; set; } = string.Empty;

    [Required]
    public string ProjectDescription { get; set; } = string.Empty;

    [Required]
    public string PreferredContactMethod { get; set; } = string.Empty;

    public string? PhoneNumber { get; set; }
    public string? CompanyName { get; set; }
    public string? ExistingWebsiteUrl { get; set; }
    public string? EstimatedBudget { get; set; }
    public string? ExpectedTimeline { get; set; }
    public string? PreferredCommunicationTime { get; set; }
    public string? ReferenceWebsites { get; set; }
    public string? RequiredFeatures { get; set; }
    public string? AdditionalNotes { get; set; }
    public string SourcePage { get; set; } = string.Empty;
    public string? UtmSource { get; set; }
    public string? UtmMedium { get; set; }
    public string? UtmCampaign { get; set; }
}
