import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import anime from "animejs"


ReactDOM.render(<App />, document.getElementById('root'))
function scroll() {
  document.body.style.overflowY = "scroll";
  document.getElementById("content").style.maxHeight = "10000px";
  if(window.screen.width >= 799){
    document.getElementById("sidebar").style.pointerEvents ="auto";
  }
}
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if(window.screen.width > 799){
    if (window.pageYOffset > sticky) {
      navbar.style.position = "fixed";
      navbar.style.opacity = "1";
      navbar.style.pointerEvents ="auto";
    } else {
      navbar.style.position = "absolute";
      navbar.style.opacity = "0";
      navbar.style.pointerEvents ="none";
    }
  }
}


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var t1 = anime.timeline({
  easing: 'easeInBack',
  duration: 1000
});
t1.add({
  targets: 'img.Rocket',
  translateY: -1500,
  duration: 2000
});



t1.add({
  targets: '.header',
  opacity: 1,
  duration: 1000
});

t1.add({
  targets: '.component',
  opacity: 1,
  duration: 1000
});


window.onscroll = function() {myFunction()};
setTimeout(scroll, 3500)


//#74f
