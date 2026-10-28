using DevDukaan.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DevDukaan.Api.Data;

public static class SeedData
{
    public static void Initialize(AppDbContext context)
    {
        context.Database.EnsureCreated();

        if (!context.AdminUsers.Any())
        {
            var passwordHash = BCrypt.Net.BCrypt.HashPassword("admin123");
            context.AdminUsers.Add(new AdminUser
            {
                UserName = "admin",
                Email = "admin@devdukaan.in",
                PasswordHash = passwordHash,
                IsActive = true
            });
        }

        if (!context.Services.Any())
        {
            context.Services.AddRange(
                new ServiceItem
                {
                    Name = "Business Websites",
                    Slug = "business-websites",
                    Summary = "Clean, conversion-focused sites for service brands.",
                    Description = "Professional websites designed to convert visitors into real leads.",
                    PriceText = "Custom Quote",
                    Icon = "Globe",
                    DisplayOrder = 1,
                    IsEnabled = true
                },
                new ServiceItem
                {
                    Name = "Web Applications",
                    Slug = "web-applications",
                    Summary = "Dashboards and apps for business operations.",
                    Description = "Operational dashboards and custom workflows designed around your team.",
                    PriceText = "Custom Quote",
                    Icon = "LayoutDashboard",
                    DisplayOrder = 2,
                    IsEnabled = true
                },
                new ServiceItem
                {
                    Name = "API Development",
                    Slug = "api-development",
                    Summary = "REST APIs for business systems and integrations.",
                    Description = "Secure APIs and integrations that connect your products and partners.",
                    PriceText = "Custom Quote",
                    Icon = "Network",
                    DisplayOrder = 3,
                    IsEnabled = true
                }
            );
        }

        if (!context.Projects.Any())
        {
            context.Projects.AddRange(
                new ProjectItem
                {
                    Name = "Atlas Legal Suite",
                    Slug = "atlas-legal-suite",
                    Summary = "A polished legal services website and lead funnel.",
                    Description = "A modern digital presence for a professional services brand.",
                    Industry = "Professional Services",
                    Category = "Business Website",
                    ClientDisplayName = "Concept Client",
                    ThumbnailUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
                    DemoUrl = "https://devdukaan.in",
                    TechnologyStack = "Brand-first design, lead generation, trusted messaging",
                    IsFeatured = true,
                    IsPublished = true,
                    DisplayOrder = 1
                },
                new ProjectItem
                {
                    Name = "Northwell Diagnostics",
                    Slug = "northwell-diagnostics",
                    Summary = "Healthcare website focused on trust and clarity.",
                    Description = "An informational healthcare website with patient-first messaging and booking flow.",
                    Industry = "Healthcare",
                    Category = "Healthcare Website",
                    ClientDisplayName = "Concept Client",
                    ThumbnailUrl = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
                    DemoUrl = "https://devdukaan.in",
                    TechnologyStack = "Customer trust, clear information, enquiry flow",
                    IsFeatured = true,
                    IsPublished = true,
                    DisplayOrder = 2
                }
            );
        }

        context.SaveChanges();
    }
}
