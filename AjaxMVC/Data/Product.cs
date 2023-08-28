using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AjaxMVC.Core;

namespace AjaxMVC.Data
{
    public class Product : BaseEntity
    {
        [Required(ErrorMessage = "Ürün alanı zorunludur.")]
        [RegularExpression(@"^[a-zA-ZğüşıöçĞÜŞİÖÇ]{1,20}$", ErrorMessage = "Sadece harf karakterleri kullanılabilir.")]
		public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
    }
}