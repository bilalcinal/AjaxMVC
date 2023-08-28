using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AjaxMVC.Data;
using AjaxMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AjaxMVC.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ProductController : ControllerBase
    {
        private readonly AjaxMvcDbContext _ajaxMvcDbContext;

        public ProductController(AjaxMvcDbContext ajaxMvcDbContext)
        {
            _ajaxMvcDbContext = ajaxMvcDbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _ajaxMvcDbContext.Products.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> CreateProduct(ProductModel productmodel)
        {
            var product = new Product
            {
                ProductName = productmodel.ProductName,
                ProductPrice = productmodel.ProductPrice,
            };
            _ajaxMvcDbContext.Products.Add(product);
            await _ajaxMvcDbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> UpdateProduct(int id, ProductModel model)
        {
            var existingEntity = await _ajaxMvcDbContext.Products.FindAsync(id);

            if (existingEntity == null)
            {
                return NotFound();
            }

            existingEntity.ProductName = model.ProductName;
            existingEntity.ProductPrice = model.ProductPrice;

            await _ajaxMvcDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var entity = await _ajaxMvcDbContext.Products.FindAsync(id);

            if (entity == null)
            {
                return NotFound();
            }

            _ajaxMvcDbContext.Products.Remove(entity);
            await _ajaxMvcDbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
