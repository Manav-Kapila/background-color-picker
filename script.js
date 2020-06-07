var css = document.querySelector("h3");
// to select elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");
// function to set gradient color
function setGradient() {
    'use strict';
	body.style.background = 
	"linear-gradient(90deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ","
    + color3.value 
	+ ", " 
	+ color4.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

color4.addEventListener("input", setGradient);