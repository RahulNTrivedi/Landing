import React from 'react'
import "./MainContent.css"
import AboutMe from './AboutMe'
import Resume from './Resume'
import Skills from './Skills'
import Projects from './Projects'
import FadeIn from "./FadeIn.js"

class MainContent extends React.Component {
  render() {

      return(
      <div className="mc">
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
