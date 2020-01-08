let currentProgressBar = 0;
let currentValueStr

$("#my-progress-bar").css('width', currentProgressBar + "%");
currentValueStr = "Текущее значение: " + currentProgressBar +"%;"
$("#currentValue").html(currentValueStr);

function printProgressBar() {
	if (currentProgressBar <= 100) {
		$("#my-progress-bar").css('width', currentProgressBar + "%");
		currentValueStr = "Текущее значение: " + currentProgressBar +"%;"
		$("#currentValue").html(currentValueStr);
		enablePlus();
	} else {
		currentValueStr = "Текущее значение превышает допустимое!";
		currentProgressBar = 100;
		$("#my-progress-bar").css('width', currentProgressBar + "%");
		$("#currentValue").html(currentValueStr);
		disablePlus();
	}
	if (currentProgressBar < 0){
		currentValueStr = "Текущее значение меньше допустимого!";
		currentProgressBar = 0;
		$("#currentValue").html(currentValueStr);
		disableMinus();
	} else {
		enableMinus();
	}
}

function addProgressBar1() {
	currentProgressBar = currentProgressBar + 1;
	printProgressBar(currentProgressBar);
}

function addProgressBar3() {
	currentProgressBar = currentProgressBar + 3;
	printProgressBar(currentProgressBar);
}

function addProgressBar7() {
 	currentProgressBar = currentProgressBar + 7;
	printProgressBar(currentProgressBar);
}
function removeProgressBar1() {
	currentProgressBar = currentProgressBar - 1;
	printProgressBar(currentProgressBar);
}

function removeProgressBar3() {
	currentProgressBar = currentProgressBar - 3;
	printProgressBar(currentProgressBar);
}

function removeProgressBar7() {
 	currentProgressBar = currentProgressBar - 7;
	printProgressBar(currentProgressBar);
}

function disablePlus() {
	$("#plus1").prop("disabled", true);
	$("#plus3").prop("disabled", true);
	$("#plus7").prop("disabled", true);
}

function enablePlus() {
	$("#plus1").prop("disabled", false);
	$("#plus3").prop("disabled", false);
	$("#plus7").prop("disabled", false);
}

function disableMinus() {
	$("#minus1").prop("disabled", true);
	$("#minus3").prop("disabled", true);
	$("#minus7").prop("disabled", true);
}

function enableMinus() {
	$("#minus1").prop("disabled", false);
	$("#minus3").prop("disabled", false);
	$("#minus7").prop("disabled", false);
}

function resetProgressBar() {
	currentProgressBar = 0;
	$("#my-progress-bar").css('width', currentProgressBar + "%");
	currentValueStr = "Текущее значение: " + currentProgressBar +"%;"
	$("#currentValue").html(currentValueStr);

	$("#plus1").prop("disabled", false);
	$("#plus3").prop("disabled", false);
	$("#plus7").prop("disabled", false);
}

function init(){
	$("#plus1").click(addProgressBar1);
	$("#plus3").click(addProgressBar3);
	$("#plus7").click(addProgressBar7);

	$("#minus1").click(removeProgressBar1);
	$("#minus3").click(removeProgressBar3);
	$("#minus7").click(removeProgressBar7);

	$("#reset").click(resetProgressBar);
}

$(document).ready(init);
