using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AjaxMVC.Core;

namespace AjaxMVC.Data
{
    public class Product : BaseEntity
    {
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
    }
}