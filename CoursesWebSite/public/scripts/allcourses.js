"use strict";

$(function() {
	let productsObj;
	$.getJSON("/api/courses", function(data) {
		productsObj = data;

		let objLen = productsObj.length;
		$("#courseTblOutput").show();
		for (let i = 0; i < objLen; i++) {
			let dynamicTableRow =
				"<tr><td>" +
				productsObj[i].courseName +
				"</td><td>" +
				productsObj[i].dept +
				"</td><td>" +
				productsObj[i].courseNum +
				"</td><td><a href='details.html?id=" +
				productsObj[i].id +
				"'>View Details</a></td></tr>";
			$("#tableBody").append(dynamicTableRow);
		}
	});
});
