using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.DatabaseClass
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options):base(options) { }
        
        public DbSet<PointsTable> PointsTable { get; set; }
    }
}
