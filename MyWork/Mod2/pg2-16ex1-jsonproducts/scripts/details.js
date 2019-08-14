"use strict";

$(function() {
	let urlParams = new URLSearchParams(location.search);
	let productId = urlParams.get("productid");
	let productsObj;

	$.getJSON("data/products.json", function(data) {
		productsObj = data;
		let objLen = productsObj.Items.length;

		for (let i = 0; i < objLen; i++) {
			let selectedItem = productsObj.Items[i];
			if (productId == selectedItem.ProductID) {
                buildRow("Product ID", selectedItem.ProductID);
                buildRow("Product Name", selectedItem.ProductName);
				buildRow("Unit Price", Number(selectedItem.UnitPrice).toFixed(2));
				buildRow("Units In Stock", selectedItem.UnitsInStock);
				buildRow("Category Name", selectedItem.CategoryName);
				buildRow("Supplier", selectedItem.Supplier);
                buildRow("Discontinued", selectedItem.Discontinued);
                if (selectedItem.Discontinued){
                    $("tr:contains(Discontinued) input").css({
                        "color" : "red"
                    });
                }
            }
		}
	});
});

function buildRow(property, value) {
	let markup = "<tr><td>" + property + "</td><td><input type='text' value='" + value + "'readonly/></td></tr>";
	$("#tableBody").append(markup);
}
