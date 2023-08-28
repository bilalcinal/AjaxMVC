
    loadProducts();


    function loadProducts() {
        $.ajax({
            url: '/api/Product/GetProducts',
            type: 'GET',
            success: function (data) {
                displayProducts(data);
            }
        });
    }


    function displayProducts(products) {
        var table = $('#productsTable tbody');
        table.empty();

        $.each(products, function (index, product) {
            table.append(
                '<tr data-id="' + product.id + '">' +
                '<td>' + product.productName + '</td>' +
                '<td>' + product.productPrice + '</td>' +
                '<td><button class="btn btn-primary edit-btn">Edit</button></td>' +
                '<td><button class="btn btn-danger delete-btn">Delete</button></td>' +
                '</tr>'
            );
        });
    }
    $("#createProductForm").submit(function (event) {
        event.preventDefault();

        var productName = $("#productName").val();
        var productPrice = $("#productPrice").val();

        var data = {
            ProductName: productName,
            ProductPrice: parseFloat(productPrice)
        };

        $.ajax({
            type: "POST",
            url: "/api/Product/CreateProduct",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function () {
               
                loadProducts();
                $("#createProductModal").modal("hide");
            }
        });
    });

    $('#productsTable').on('click', '.edit-btn', function () {
        var row = $(this).closest('tr');
        var productId = row.data('id');
        var productName = row.find('td:eq(0)').text();
        var productPrice = parseFloat(row.find('td:eq(1)').text());


        $('#editProductId').val(productId);
        $('#editProductName').val(productName);
        $('#editProductPrice').val(productPrice);
        $('#editProductModal').modal('show');
    });

    $('#editProductForm').submit(function (e) {
        e.preventDefault();

        var productId = parseInt($('#editProductId').val());
        var productName = $('#editProductName').val();
        var productPrice = parseFloat($('#editProductPrice').val());

        $.ajax({
            url: '/api/Product/UpdateProduct?id=' + productId,
            type: 'POST',
            data: JSON.stringify({ productName: productName, productPrice: productPrice }),
            contentType: 'application/json',
            success: function () {
                loadProducts();
                $('#editProductModal').modal('hide');
            }
        });
    });

    $('#productsTable').on('click', '.delete-btn', function () {
        var row = $(this).closest('tr');
        var productId = row.data('id');

        $.ajax({
            url: '/api/Product/DeleteProduct?id=' + productId,
            type: 'POST',
            success: function () {
                loadProducts();
            }
        });
    });


