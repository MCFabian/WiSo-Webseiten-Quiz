
window.addEventListener("load", function(){

	var radioone = document.getElementById("qu-one-la-one");
	var radiotwo = document.getElementById("qu-one-la-two");
	var radiothree = document.getElementById("qu-one-la-three");

	var radiofour = document.getElementById("qu-two-la-one");
	var radiofive = document.getElementById("qu-two-la-two");

	var radiosix = document.getElementById("qu-three-la-one");
	var radioseven = document.getElementById("qu-three-la-two");

	var radioeight = document.getElementById("qu-four-la-one");
	var radionine = document.getElementById("qu-four-la-two");
	var radioten = document.getElementById("qu-four-la-three");
	
	//Frage 1

	radioone.addEventListener("click", function(){
		radioone.classList.add("active-radio");
		radiotwo.classList.remove("active-radio");
		radiothree.classList.remove("active-radio");
	});

	radiotwo.addEventListener("click", function(){
		radioone.classList.remove("active-radio");
		radiotwo.classList.add("active-radio");
		radiothree.classList.remove("active-radio");
	});

	radiothree.addEventListener("click", function(){
		radioone.classList.remove("active-radio");
		radiotwo.classList.remove("active-radio");
		radiothree.classList.add("active-radio");
	});

	//Frage 2

	radiofour.addEventListener("click", function(){
		radiofour.classList.add("active-radio");
		radiofive.classList.remove("active-radio");
	});

	radiofive.addEventListener("click", function(){
		radiofour.classList.remove("active-radio");
		radiofive.classList.add("active-radio");
	});

	//Frage 3

	radiosix.addEventListener("click", function(){
		radiosix.classList.add("active-radio");
		radioseven.classList.remove("active-radio");
	});

	radioseven.addEventListener("click", function(){
		radiosix.classList.remove("active-radio");
		radioseven.classList.add("active-radio");
	});

	//Frage 4

	radioeight.addEventListener("click", function(){
		radioeight.classList.add("active-radio");
		radionine.classList.remove("active-radio");
		radioten.classList.remove("active-radio");
	});

	radionine.addEventListener("click", function(){
		radioeight.classList.remove("active-radio");
		radionine.classList.add("active-radio");
		radioten.classList.remove("active-radio");
	});

	radioten.addEventListener("click", function(){
		radioeight.classList.remove("active-radio");
		radionine.classList.remove("active-radio");
		radioten.classList.add("active-radio");
	});

	// Frage 5

});





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
var addactive = classList.add("active-radio");
var removeactive = classList.remove("active-radio");
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

function getthree(){
	var one = document.getElementById("qu-three-ans-one");
	var two = document.getElementById("qu-three-ans-two");

	if(one.checked){
		stepthree = 1;
		alert("Richtig");
	}

	else {
		stepthree = 0;
		alert("Falsch");
	}

	return stepthree;
}

function getfour(){
	var one = document.getElementById("qu-four-ans-one");
	var two = document.getElementById("qu-four-ans-two");
	var three = document.getElementById("qu-four-ans-three");
	if(three.checked){
		stepfour = 1;
		alert("Richtig");
	}

	else {
		stepfour = 0;
		alert("Falsch");
	}

	return stepfour;
}

function getscore(){
	score = getone() +gettwo() +getthree() +getfour();

	/* var nameend = document.getElementById("name").value;
	
		if(nameend == "") {
			document.getElementById("score").innerHTML = "Du hast " +score +"/5 Fragen richtig beantwortet!";
		}
	
		else {
			document.getElementById("score").innerHTML = nameend +", du hast " +score +"/5 Fragen richtig beantwortet!";
		} */
	
	alert(score);
}






