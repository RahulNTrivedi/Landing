import React from 'react'
import "./stylings/Resume.css"
import resume from "./Resume.pdf"
import rutgers from "./pictures/Rutgers.png"
import marlboro from "./pictures/Marlboro.png"
import usacs from "./pictures/usacs-logo.svg"
import fizzbuzz from "./pictures/Fizzbuzz.jpg"

function Resume(){
  return(
    <div className="component">
      <h1 className="title">Resume</h1>
      <h1 className="parts">Education</h1>
      <div className="marlboro">
        <h2 className="school">Marlboro High School (2015-2019)</h2>
        <img className="pic" src={marlboro} alt="Marlboro High School" width="150" height="150" />
        <h3 className="category">Degree: High School Diploma</h3>
        <h3 className="category">Relevant Courses</h3>
        <ul className="class">
          <li className="class">AP Computer Science A</li>
          <li className="class">AP Computer Science Principles</li>
          <li className="class">AP Calculus BC</li>
          <li className="class">AP Physics 1/2</li>
        </ul>
      </div>
      <div className="rutgers">
        <h2 className="school">Rutgers University New Brunswick (2019-present)</h2>
        <img className="pic" src={rutgers} alt="Rutgers University" width="150" height="189.6" />
        <h3 className="category">Degree: Bachelors of Science in Computer Science</h3>
        <h3 className="category">Relevant Coursework</h3>
        <ul className="class">
          <li className="class">Data Structures</li>
          <li className="class">Intro to Linear Algebra</li>
          <li className="class">Seminar on AI Throughout the Ages</li>
          <li className="class">Discrete Structures I/II</li>
          <li className="class">Computer Architecture</li>
          <li className="class">Systems Programming</li>
          <li className="class">Principles of Programming Languages</li>
          <li className="class">Operating Systems Design</li>
        </ul>
        <h3 className="category">GPA: 4.0/4.0</h3>
      </div>
      <h1 className="parts">Experience</h1>
      <div className="USACS">
        <img className="pic" src={usacs} alt="USACS" width="150" height="50" />
        <h2 className="school">Undergraduate Students Computer Science (USACS) (2019-present) </h2>
        <p className="description">In the 2019-2020 school year, I consistently attended weekly technical workshops throughout the semester to learn about different programming languages, frameworks, APIs, and tools. As a member of the education committee, I assisted with creating clearer assignment descriptions for intro level classes. For the 2020-2021 school year, I am the Education Director and am in charge of bringing in speakers and organizing the mentorship program</p>
        <img className="pic" src={fizzbuzz} alt="Fizzbuzz" width="150" height="150" />
        <h2 className="school">Fizzbuzz (2019-present)</h2>
        <p className="description">In the 2019-2020 school year, I participated in weekly interview prep meetings with mock interviews and guest speakers from various tech companies. As Education Director, I will be in charge of creating and hosting a weekly interview prep workshop that teaches undergraduates the basics of interviewing and how to tackle technical questions in the 2020-2021 school year.</p>
      </div>
      <div className="paperResume"><a href={resume} download><i class="fas fa-file-pdf"></i></a></div>
    </div>)
}

export default Resume
