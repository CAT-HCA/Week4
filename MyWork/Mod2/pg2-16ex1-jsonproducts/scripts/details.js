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
				if (selectedItem.Discontinued == "true") {
					$("tr:contains(Discontinued) input").css({
						color: "red",
					});
				}
			}
		}
		let editBtn = $("#editBtn");
		let updateBtn = $("#updateBtn");
		let cancelBtn = $("#cancelBtn");
		
		let productNameCurVal =  $("#productnameOutputField").val();
		let unitPriceCurVal =  $("#unitpriceOutputField").val();
		let unitsInStockCurVal =  $("#unitsinstockOutputField").val();
		let categorynameCurVal =  $("#categorynameOutputField").val();
		let supplierCurVal =  $("#supplierOutputField").val();
		let discontinuedCurVal =  $("#discontinuedOutputField").val();;

		editBtn.on("click", function() {
			editBtn.css("display", "none");
			$(":input:not([id='productidOutputField'])").prop("disabled", false);
			$("#hiddenEditDiv").toggleClass("hideDiv");


		});
		cancelBtn.on("click", function() {
			$("#hiddenEditDiv").toggleClass("hideDiv");
			$(":input:not([id='productidOutputField'])").prop("disabled", true);
			editBtn.css("display", "");
			editBtn.prop("disabled", false);
			$("#productnameOutputField").val(productNameCurVal);
			$("#unitpriceOutputField").val(Number(unitPriceCurVal).toFixed(2));
			$("#unitsinstockOutputField").val(unitsInStockCurVal);
			$("#categorynameOutputField").val(categorynameCurVal);
			$("#supplierOutputField").val(supplierCurVal);
			$("#discontinuedOutputField").val(discontinuedCurVal);

		});
		updateBtn.on("click", function() {
			alert("Update Functionality Coming Soon!");
		});



	});





});

function buildRow(property, value) {
	let propString = property.split(" ");
	let inputId = ((propString.join("")).toLowerCase()) + "OutputField";


	let markup =
		"<tr><td>" +
		property +
		'</td><td><input class="w-75 pl-3 text-left" type="text" value="' +
		value +
		'" name="' +
		inputId +
		'" id="' +
		inputId +
		'" disabled /></td></tr>"';
		console.log(markup);
	$("#tableBody").append(markup);
}
