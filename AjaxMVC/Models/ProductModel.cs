using System;
using System.ComponentModel.DataAnnotations;

namespace AjaxMVC.Models
{
	public class ProductModel
	{
		[Required(ErrorMessage = "Ürün alanı zorunludur.")]
                [RegularExpression(@"^[a-zA-ZğüşıöçĞÜŞİÖÇ]{1,20}$", ErrorMessage = "Sadece harf karakterleri kullanılabilir.")]
		public string ProductName { get; set; }
		public decimal ProductPrice { get; set; }
	}
}

