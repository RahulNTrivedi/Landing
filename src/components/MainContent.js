import React from 'react'
import "./stylings/MainContent.css"
import AboutMe from './AboutMe'
import Resume from './Resume'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'

class MainContent extends React.Component {
  render() {

      return(
      <div className="mc">
          <div id="AboutMe"><AboutMe /></div>
          <div id="Projects"><Projects /></div>
          <div id="Education"><Education /></div>
          <div id="Resume"><Resume /></div>
          <div id="Skills"><Skills /></div>
      </div>);

  }
}

export default MainContent
