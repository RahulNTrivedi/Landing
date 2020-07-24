import React from 'react'
import "./MainContent.css"
import AboutMe from './AboutMe'
import Resume from './Resume'
import Skills from './Skills'
import Projects from './Projects'
import FadeIn from "./FadeIn.js"
import rocket from "./pictures/rocket.svg"

class MainContent extends React.Component {
  render() {

      return(
      <div className="mc">
        <ul className="list" id="navbar">
          <li className="section" class="section"><a href="#features"><img src={rocket} width="50px" height="20px"></img></a></li>
          <li className="section" class="section"><a href="#AboutMe">About Me</a></li>
          <li className="section" class="section"><a href="#Projects">Projects</a></li>
          <li className="section" class="section"><a href="#Resume">Resume</a></li>
          <li className="section" class="section"><a href="#Skills">Skills</a></li>
          <li className="section" class="section"><a href="#Contacts">Contacts</a></li>
        </ul>
        <FadeIn>
          <div id="AboutMe"><AboutMe /></div>
        </FadeIn>
        <FadeIn>
          <div id="Projects"><Projects /></div>
        </FadeIn>
        <FadeIn>
          <div id="Resume"><Resume /></div>
        </FadeIn>
        <FadeIn>
          <div id="Skills"><Skills /></div>
        </FadeIn>
      </div>);

  }
}

export default MainContent
