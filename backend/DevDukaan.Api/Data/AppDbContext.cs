using DevDukaan.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DevDukaan.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<AdminUser> AdminUsers => Set<AdminUser>();
    public DbSet<ServiceItem> Services => Set<ServiceItem>();
    public DbSet<ProjectItem> Projects => Set<ProjectItem>();
    public DbSet<Inquiry> Inquiries => Set<Inquiry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ServiceItem>().HasIndex(x => x.Slug).IsUnique();
        modelBuilder.Entity<ProjectItem>().HasIndex(x => x.Slug).IsUnique();
        modelBuilder.Entity<AdminUser>().HasIndex(x => x.UserName).IsUnique();
        modelBuilder.Entity<AdminUser>().HasIndex(x => x.Email).IsUnique();
        modelBuilder.Entity<Inquiry>().HasIndex(x => x.ReferenceId).IsUnique();

        modelBuilder.Entity<ServiceItem>().Property(x => x.Name).HasMaxLength(200);
        modelBuilder.Entity<ServiceItem>().Property(x => x.Slug).HasMaxLength(200);
        modelBuilder.Entity<ProjectItem>().Property(x => x.Name).HasMaxLength(200);
        modelBuilder.Entity<ProjectItem>().Property(x => x.Slug).HasMaxLength(200);
        modelBuilder.Entity<Inquiry>().Property(x => x.ReferenceId).HasMaxLength(50);

        base.OnModelCreating(modelBuilder);
    }
}
