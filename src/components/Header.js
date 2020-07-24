import React from 'react'
import './header.css'
import ufo from './pictures/UFO.png'
import rocket from "./pictures/rocket-ship-launch.svg"

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
      <div className="header">
        <div className="welcometop">
          <ul className="sidebar" id="sidebar">
            <li className="section2" class="section2"><a href="#AboutMe">About Me</a></li>
            <li className="section2" class="section2"><a href="#Projects">Projects</a></li>
            <li className="section2" class="section2"><a href="#Resume">Resume</a></li>
            <li className="section2" class="section2"><a href="#Skills">Skills</a></li>
            <li className="section2" class="section2"><a href="#Contacts">Contacts</a></li>
          </ul>
          <img className="ufo" src={ufo} alt="UFO" width="300" height="270" />
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
