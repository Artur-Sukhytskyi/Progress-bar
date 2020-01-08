let currentProgressBar = 0;
let currentValueStr

function printProgressBar() {
	if (currentProgressBar<=100) {
		$("#my-progress-bar").css('width', currentProgressBar + "%");
		currentValueStr = "Текущее значение: " + currentProgressBar +"%;"
		$("#currentValue").html(currentValueStr);
	} else {
		currentValueStr = "Текущее значение превышает допустимое!";
		currentProgressBar = 100;
		$("#my-progress-bar").css('width', currentProgressBar + "%");
		$("#currentValue").html(currentValueStr);
		enableReset();
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

function enableReset() {
	$("#reset").prop("disabled", false);
	$("#plus1").prop("disabled", true);
	$("#plus3").prop("disabled", true);
	$("#plus7").prop("disabled", true);
}

function resetProgressBar() {
	currentProgressBar = 0;
	$("#my-progress-bar").css('width', currentProgressBar + "%");
	currentValueStr = "Текущее значение: " + currentProgressBar +"%;"
	$("#currentValue").html(currentValueStr);
	$("#reset").prop("disabled", true);
	$("#plus1").prop("disabled", false);
	$("#plus3").prop("disabled", false);
	$("#plus7").prop("disabled", false);
}


function init(){
	$("#plus1").click(addProgressBar1);
	$("#plus3").click(addProgressBar3);
	$("#plus7").click(addProgressBar7);
	$("#reset").click(resetProgressBar);
}

$(document).ready(init);