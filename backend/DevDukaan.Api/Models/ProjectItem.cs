namespace DevDukaan.Api.Models;

public class ProjectItem
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Industry { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string ClientDisplayName { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = string.Empty;
    public string? DemoUrl { get; set; }
    public string? ProductionUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public string TechnologyStack { get; set; } = string.Empty;
    public bool IsFeatured { get; set; }
    public bool IsPublished { get; set; } = true;
    public int DisplayOrder { get; set; }
    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAtUtc { get; set; } = DateTime.UtcNow;
}
