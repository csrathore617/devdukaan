namespace DevDukaan.Api.Models;

public class Inquiry
{
    public int Id { get; set; }
    public string ReferenceId { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string ProjectType { get; set; } = string.Empty;
    public string ProjectDescription { get; set; } = string.Empty;
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
    public string Status { get; set; } = "New";
    public string SourcePage { get; set; } = string.Empty;
    public string? UtmSource { get; set; }
    public string? UtmMedium { get; set; }
    public string? UtmCampaign { get; set; }
    public bool IsSpam { get; set; }
    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAtUtc { get; set; } = DateTime.UtcNow;
}
