import React from 'react'
import "./stylings/AboutMe.css"
import me from  "./pictures/Rahul.jpg"

function AboutMe(){
  return(
    <div className="component lighter" id="deets">
      <h1 className="title">About Me</h1>
      <div className="contents">
        <img className="Me" id="me" src={me} alt="Rahul Trivedi" />
        <p className="info">My name is Rahul Trivedi and I am an Computer Scientist and Software Engineer! I recently graduated with a Bachelors of Science majoring in Computer Science and minoring in music at Rutgers University in Spring 2022! I've worked as an intern at Oracle Cloud Infrastructure in the summer of 2021, and am currently working as an intern for the summer of 2022! On my free time, I love creating music, whether it's playing on the violin or trombone, or making my own arrangements! I am currently looking for fulltime work starting in the Fall!.</p>
      </div>
    </div>
  )
}

export default AboutMe
