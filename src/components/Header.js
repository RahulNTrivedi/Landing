import React from 'react'
import './stylings/header.css'
import ufo from './pictures/UFO.png'
import rocket from "./pictures/rocket.svg"

class Header extends React.Component {

  render() {
  return(
      <div className="top">
      <ul className="list" id="navbar">
        <li className="section"><a href="#features"><img src={rocket} alt="Rocket" width="50px" height="20px"></img></a></li>
        <li className="section"><a href="#AboutMe">About Me</a></li>
        <li className="section"><a href="#Projects">Projects</a></li>
        <li className="section"><a href="#Resume">Resume</a></li>
        <li className="section"><a href="#Skills">Skills</a></li>
        <li className="section"><a href="#Contacts">Contacts</a></li>
      </ul>
      <div className="header">
        <div className="welcometop" id="head">
          <ul className="sidebar" id="sidebar">
            <li className="section2"><a href="#AboutMe">About Me</a></li>
            <li className="section2"><a href="#Projects">Projects</a></li>
            <li className="section2"><a href="#Resume">Resume</a></li>
            <li className="section2"><a href="#Skills">Skills</a></li>
            <li className="section2"><a href="#Contacts">Contacts</a></li>
          </ul>
          <img className="ufo" src={ufo} alt="UFO" width="291.6" height="270" />
          <h1 className="welcome">Hello!</h1>
          <p>I'm Rahul Trivedi.</p>
          <p>Welcome to my personal website!</p>
        </div>
      </div>
    </div>);
  }
}
export default Header
