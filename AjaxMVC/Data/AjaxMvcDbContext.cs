using Microsoft.EntityFrameworkCore;

namespace AjaxMVC.Data
{
    public class AjaxMvcDbContext : DbContext
    {
        public AjaxMvcDbContext(DbContextOptions<AjaxMvcDbContext>options) : base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }
    }
 
}
