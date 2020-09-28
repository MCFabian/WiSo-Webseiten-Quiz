// JavaScript Document

// Close and Open Quiz Modal
window.addEventListener("load", function(){

	var modal = document.getElementById("overlay");

	document.getElementById("start").addEventListener("click", function(){
		openmodal();
	});
	
	document.getElementById("close").addEventListener("click", function(){
		closemodal();
	});

	function openmodal(){
		modal.style.display = "flex";
	}
	
	function closemodal(){
		modal.style.display = "none";
	}

	
});

// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}


document.getElementById("expand").addEventListener("click", function(){
        document.getElementById("content_browser").style.top ="35px";
        document.getElementById("expand").style.display ="none";
        document.getElementById("minimize").style.display ="block";
});

document.getElementById("minimize").addEventListener("click", function(){
    document.getElementById("content_browser").style.top ="";
    document.getElementById("expand").style.display ="block";
    document.getElementById("minimize").style.display ="none";
});



            
window.onscroll = function() {myFunction()};
            
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}











