import React from 'react'
import "./AboutMe.css"
import me from  "./pictures/me.jpeg"

function AboutMe(){
  return(
    <div className="deets">
      <img className="Me" src={me} alt="Rahul Trivedi" width="260" height="350" />
      <h1 className="title">About Me</h1>
      <p className="info">My name is Rahul Trivedi and I am a computer scientist enrolled at Rutgers University. I began programming my Junior year of High School and have been in love with CS ever since! My goal is to go to Graduate School and get my M.S. in Computer Science. I'm currently looking for an internship for the summer as a software developer.</p>
    </div>)
}

export default AboutMe
