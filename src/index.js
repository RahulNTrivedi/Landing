import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


ReactDOM.render(<App />, document.getElementById('root'))
function scroll() {
  document.body.style.overflowY = "scroll";
  document.getElementById("content").style.maxHeight = "10000px";
  if(window.screen.width > 799){
    document.getElementById("sidebar").style.pointerEvents ="auto";
  }
}
var navbar = document.getElementById("navbar");
var head = document.getElementById("me");
var proj = document.getElementById("proj");
var sticky = navbar.offsetTop;
var pic = head.offsetTop;
var projects = proj.offsetTop;
function myFunction() {

  if (window.screen.width > 799 && window.pageYOffset > sticky) {
    navbar.style.position = "fixed";
    navbar.style.opacity = "1";
    navbar.style.pointerEvents ="auto";
  } else {
    navbar.style.position = "absolute";
    navbar.style.opacity = "0";
    navbar.style.pointerEvents ="none";
  }


  if(window.pageYOffset + (window.screen.availHeight/2) < pic ){
    document.getElementById("me").style.filter ="none";
  }

  if(window.pageYOffset + (window.screen.availHeight/2) >= pic && window.pageYOffset < projects){
    document.getElementById("me").style.filter ="drop-shadow(16px 16px 20px white)";
  }

  if(window.pageYOffset >= projects ){
    document.getElementById("me").style.filter ="none";
  }

}


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


window.onscroll = function() {myFunction()};
scroll()


//#74f
