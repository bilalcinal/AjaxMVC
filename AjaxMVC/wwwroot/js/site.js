// Yeni ürün oluşturma
$("#create-product").click(function () {
    var productName = $("#product-name").val();
    var productPrice = $("#product-price").val();

    $.ajax({
        type: "POST",
        url: "/api/Product/CreateProduct",
        contentType: "application/json",
        data: JSON.stringify({ ProductName: productName, ProductPrice: productPrice }),
        success: function (result) {
            // Başarılı olursa işlem sonrası yapılacak işlemler
            console.log("Ürün oluşturuldu:", result);
        },
        error: function (error) {
            // Hata durumunda yapılacak işlemler
            console.error("Ürün oluşturulamadı:", error);
        }
    });
});

// Ürün güncelleme
$("#update-product").click(function () {
    var productId = $("#product-id").val();
    var productName = $("#product-name").val();
    var productPrice = $("#product-price").val();

    $.ajax({
        type: "PUT",
        url: "/api/Product/UpdateProduct/" + productId,
        contentType: "application/json",
        data: JSON.stringify({ ProductName: productName, ProductPrice: productPrice }),
        success: function (result) {
            // Başarılı olursa işlem sonrası yapılacak işlemler
        },
        error: function (error) {
            // Hata durumunda yapılacak işlemler
        }
    });
});

// Ürün silme
$("#delete-product").click(function () {
    var productId = $("#product-id").val();

    $.ajax({
        type: "DELETE",
        url: "/api/Product/DeleteProduct/" + productId,
        success: function (result) {
            // Başarılı olursa işlem sonrası yapılacak işlemler
        },
        error: function (error) {
            // Hata durumunda yapılacak işlemler
        }
    });
});
