import React from 'react'
import "./AboutMe.css"
import me from  "./pictures/pic.jfif"

function AboutMe(){
  return(
    <div className="deets" id="deets">
      <img className="Me" src={me} alt="Rahul Trivedi" width="300" height="300" />
      <h1 className="title">About Me</h1>
      <p className="info">My name is Rahul Trivedi and I am an aspiring computer scientist enrolled at Rutgers University. I began programming my Junior year of High School and have been in love with CS ever since! My goal is to go to Graduate School and get my M.S. in Computer Science. I'm currently looking for an internship for the summer as a software developer.</p>
    </div>)
}

export default AboutMe
