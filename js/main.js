// get .clientHeight of #deets
var deetsHeight = document.getElementById("deets").clientHeight;

// tell the World the pixel height of that sweet sweet element
console.log(`Height of element id=\"deets\" = ${deetsHeight}px`);

// setProperty to use in CSS
document.documentElement.style.setProperty('--deetsH', `${deetsHeight}px`);

var animation = lottie.loadAnimation({
    container: document.getElementById('anim'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'LoadingDots.json' // the path to the animation json
  });