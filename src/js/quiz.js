// JavaScript Document
document.getElementById("next").addEventListener("click", function(){
	var name = document.getElementById("name").value;

	if(name == "") {
		document.getElementById("welcome").innerHTML = "Lass uns loslegen!";
	}

	else {
		document.getElementById("welcome").innerHTML = name +", lass uns loslegen!";
	}

});

// INSG
var score;
//var labelfalse = classList.add("label-false");
//var labeltrue = classList.add("label-true");


// FRAG 1
function getone() {
	var one = document.getElementById("qu-one-ans-one");
	var two = document.getElementById("qu-one-ans-two");
	var three = document.getElementById("qu-one-ans-three");
	var stepone;

	if(three.checked){
		stepone = 1;
		alert("Richtig");
	}

	else {
		stepone = 0;
		alert("Falsch");
	}

	return stepone;
}

function gettwo(){
	var one = document.getElementById("qu-two-ans-one");
	var two = document.getElementById("qu-two-ans-two");

	if(two.checked){
		steptwo = 1;
		alert("Richtig");
	}

	else {
		steptwo = 0;
		alert("Falsch");
	}

	return steptwo;
}

function getscore(){
	score = getone() +gettwo();
	alert(score);
}






