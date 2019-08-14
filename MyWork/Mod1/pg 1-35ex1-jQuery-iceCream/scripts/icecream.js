// Description: These functions will calculate the future value of a one-time deposit
//assuming compound interest (compounding annually)
//Author: Corinne Trudeau
"use strict";

/*
 *This is the window.onload event handler
 */
$(function() {
    $("#coneRadioOption").on("click", function() {
            $("#hotFudgeDiv").hide();
    });
    $("#cupRadioOption").on("click", function() {
        $("#hotFudgeDiv").show();
    });


	$("#calcBtn").on("click", function() {

		//Process Data
		let iceCreamCost = getIceCreamCost($("#inputNumScoops").val());
		let toppingCost = getToppingCost(
			$("#selectHotFudge").prop("checked"),
            $("#selectSprinkles").prop("checked"),
            $("#selectWhip").prop("checked")
		);

		let totalCost = iceCreamCost + toppingCost;

		//Display results
		$("#priceOutputField").text("Price: $" + totalCost.toFixed(2));
	});
});

/*
 * This function will determine the cost of the ice cream without toppings
 * @param numScoops (number) - number of scoops requested (1-3)
 * @return iceCreamCost (number) - returns the cost of the ice cream
 */
function getIceCreamCost(numScoops) {
	let iceCreamCost = 0;
	switch (numScoops) {
		case "1":
			iceCreamCost = 2.5;
			break;
		case "2":
			iceCreamCost = 3.75;
			break;
		case "3":
			iceCreamCost = 5.0;
			break;
		default:
			break;
	}
	return iceCreamCost;
}

/*
 * This function will determine the cost of just the toppings, if any are selected
 * @param hotFudge (boolean) - value of hotFudge checkbox
 * @param sprinkles (boolean) - value of sprinkles checkbox
 * @param whip (boolean) - value of whip checkbox
 * @return toppingCost (number) - returns the cost of the toppings
 */
function getToppingCost(hotFudge, sprinkles, whip) {
	let toppingCost = 0;
	if (hotFudge) {
		toppingCost += 1.25;
	}
	if (sprinkles) {
		toppingCost += 0.25;
	}
	if (whip) {
		toppingCost += 0.75;
	}
	return toppingCost;
}