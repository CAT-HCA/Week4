"use strict";

$(function() {
	let categories = [
		"Beverages",
		"Condiments",
		"Produce",
		"Meat/Poultry",
		"Seafood",
		"Dairy Products",
		"Confections",
		"Grains/Cereals",
    ];

	let categoryLen = categories.length;
	//populates drop down
	for (let i = 0; i < categoryLen; i++) {
		let categoryDDOptions = categories[i];
		let newDDOption = $("<option>", {
			value: categoryDDOptions,
			text: categoryDDOptions,
		});
		newDDOption.appendTo("#categoryDropDown");
	}

	let productsObj;
	$.getJSON("data/products.json", function(data) {
		productsObj = data;
	});

	$("#categoryDropDown").on("change", function() {
            $("#mtnTblOutput").hide();
            $("#tableBody").empty();
		let objLen = productsObj.Items.length;
		$("#mtnTblOutput").show();
		for (let i = 0; i < objLen; i++) {
			let categoryOptions = productsObj.Items[i];
			if ($("#categoryDropDown").val() == categoryOptions.CategoryName) {
				let dynamicTableRow =
					"<tr><td>" +
					categoryOptions.ProductID +
					"</td><td>" +
					categoryOptions.ProductName +
					"</td><td>$" +
					Number(categoryOptions.UnitPrice).toFixed(2) +
					"</td><td><a href='details.html?productid=" +
					Number(categoryOptions.ProductID) +
					"'>View Details</a></td></tr>";
				$("#tableBody").append(dynamicTableRow);
			}
		}
	});
});

