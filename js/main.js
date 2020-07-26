// get .clientHeight of #deets
var deetsHeight = document.getElementById("deets").clientHeight;

// tell the World the pixel height of that sweet sweet element
console.log(`Height of element id=\"deets\" = ${deetsHeight}px`);

// setProperty to use in CSS
document.documentElement.style.setProperty('--deetsH', `${deetsHeight}px`);