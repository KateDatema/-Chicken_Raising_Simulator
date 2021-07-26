using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ChickenSim.Models
{
    public partial class ChickenSimContext : DbContext
    {
        


        public ChickenSimContext()
        {
        }

        public ChickenSimContext(DbContextOptions<ChickenSimContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Chicken> Chickens { get; set; }
        public virtual DbSet<Farm> Farms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=ChickenSim;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Chicken>(entity =>
            {
                entity.Property(e => e.Color).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.HasOne(d => d.Farm)
                    .WithMany(p => p.Chickens)
                    .HasForeignKey(d => d.FarmId)
                    .HasConstraintName("FK__Chickens__FarmId__29572725");
            });

            modelBuilder.Entity<Farm>(entity =>
            {
                entity.ToTable("Farm");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
