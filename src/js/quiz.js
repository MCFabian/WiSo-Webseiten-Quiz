
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

	var radioeleven = document.getElementById("qu-five-la-one");
	var radiotwelve = document.getElementById("qu-five-la-two");
	
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

	radioeleven.addEventListener("click", function(){
		radioeleven.classList.add("active-radio");
		radiotwelve.classList.remove("active-radio");
	});

	radiotwelve.addEventListener("click", function(){
		radioeleven.classList.remove("active-radio");
		radiotwelve.classList.add("active-radio");
	});
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


// FRAGE 1
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
	var steptwo;

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
	var stepthree;

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
	var stepfour;

	if(three.checked){
		stepfour = 1;
		alert("Ant 4Richtig");
	}

	else {
		stepfour = 0;
		alert("Ant 4 Falsch");
	}

	return stepfour;
}

function getfive(){
	var one = document.getElementById("qu-five-ans-one");
	var two = document.getElementById("qu-five-ans-two");
	var stepfive;

	if(one.checked){
		stepfive = 1;
		alert("Richtig");
	}

	else {
		stepfive = 0;
		alert("Falsch");
	}

	return stepfive;
}

function getscore(){
	score = getone() +gettwo() +getthree() +getfour() +getfive();

	var nameend = document.getElementById("name").value;
	
		if(nameend == "") {
			document.getElementById("score").innerHTML = "Du hast " +score +"/5 Fragen richtig beantwortet!";
		}
	
		else {
			document.getElementById("score").innerHTML = nameend +", du hast " +score +"/5 Fragen richtig beantwortet!";
		} 
	
	alert(score);
}






