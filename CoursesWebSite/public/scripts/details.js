"use strict";

$(function() {
	let urlParams = new URLSearchParams(location.search);
	let courseId = urlParams.get("id");
	let coursesObj;

	$.getJSON('/api/courses', function(data) {
        coursesObj = data;
		let objLen = coursesObj.length;

		for (let i = 0; i < objLen; i++) {
			let selectedCourse = coursesObj[i];
			if (courseId == selectedCourse.id) {
				buildRow("ID", selectedCourse.id);
				buildRow("Course Name", selectedCourse.courseName);
				buildRow("Department", selectedCourse.dept);
				buildRow("Course Number", selectedCourse.courseNum);
				buildRow("Instructor", selectedCourse.instructor);
				buildRow("Start Date", selectedCourse.startDate);
				buildRow("Number of Days", selectedCourse.numDays);
			}
		}
		
    let editBtn = $("#editBtn");
    let updateBtn = $("#updateBtn");
    let cancelBtn = $("#cancelBtn");
    
    let courseNameCurVal =  $("#coursenameOutputField").val();
    let deptPriceCurVal =  $("#departmentOutputField").val();
    let courseNumCurVal =  $("#coursenumberOutputField").val();
    let instructorCurVal =  $("#instructorOutputField").val();
    let startDateCurVal =  $("#startdateOutputField").val();
    let numDaysCurVal =  $("#numberofdaysOutputField").val();;

    editBtn.on("click", function() {
        editBtn.css("display", "none");
        $(":input:not([id='idOutputField'])").prop("disabled", false);
        $("#hiddenEditDiv").toggleClass("hideDiv");


    });
    cancelBtn.on("click", function() {
        $("#hiddenEditDiv").toggleClass("hideDiv");
        $(":input:not([id='productidOutputField'])").prop("disabled", true);
        editBtn.css("display", "");
        editBtn.prop("disabled", false);
        $("#coursenameOutputField").val(courseNameCurVal);
        $("#departmentOutputField").val(deptPriceCurVal);
        $("#coursenumberOutputField").val(courseNumCurVal);
        $("#instructorOutputField").val(instructorCurVal);
        $("#startdateOutputField").val(startDateCurVal);
        $("#numberofdaysOutputField").val(numDaysCurVal);

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