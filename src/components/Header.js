import React from 'react'
import './header.css'
import ufo from './pictures/UFO.png'
import rocket from "./pictures/rocket-ship-launch.svg"
import rocket2 from "./pictures/rocket.svg"

class Header extends React.Component {
  onClick(e, link){
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior:"smooth",
    });
  }
  /*componentDidMount() {
    document.querySelectorAll("li a").forEach((anchor) => {
      anchor.addEventListener("click", (e) => this.onClick(e, anchor));
    }
  }*/

  render() {
  return(
      <div className="top">
      <ul className="list" id="navbar">
        <li className="section" class="section"><a href="#features"><img src={rocket2} alt="Rocket" width="50px" height="20px"></img></a></li>
        <li className="section" class="section"><a href="#AboutMe">About Me</a></li>
        <li className="section" class="section"><a href="#Projects">Projects</a></li>
        <li className="section" class="section"><a href="#Resume">Resume</a></li>
        <li className="section" class="section"><a href="#Skills">Skills</a></li>
        <li className="section" class="section"><a href="#Contacts">Contacts</a></li>
      </ul>
      <div className="header">
        <div className="welcometop">
          <ul className="sidebar" id="sidebar">
            <li className="section2" class="section2"><a href="#AboutMe">About Me</a></li>
            <li className="section2" class="section2"><a href="#Projects">Projects</a></li>
            <li className="section2" class="section2"><a href="#Resume">Resume</a></li>
            <li className="section2" class="section2"><a href="#Skills">Skills</a></li>
            <li className="section2" class="section2"><a href="#Contacts">Contacts</a></li>
          </ul>
          <img className="ufo" src={ufo} alt="UFO" width="291.6" height="270" />
          <h1 className="welcome">Hello!</h1>
          <p>I'm Rahul Trivedi.</p>
          <p>Welcome to my personal website!</p>
        </div>
      </div>
      <img className="Rocket" src={rocket} alt="Rocket" width="240" height="300" />
    </div>);
  }
}
export default Header
