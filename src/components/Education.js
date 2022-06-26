import React from 'react'
import Modal from 'react-modal';
import "./stylings/Education.css"
import rutgers from "./pictures/rutgerslogo.png"
import rutgerslong from "./pictures/rut.png"
import marlboro from "./pictures/Marlboro.png"
import usacs from "./pictures/usacs-logo.svg"
import fizzbuzz from "./pictures/Fizzbuzz.jpg"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width: "50%",
    maxWidth: "800px",
    maxHeight: "500px",
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor : 'black',
    color:'white',
    fontFamily: "Lato",
    letterSpacing: "1px",
    fontWeight: "bold"
  }
};

function Education(){
  const [rmodalIsOpen,rsetIsOpen] = React.useState(false);
  const [mmodalIsOpen,msetIsOpen] = React.useState(false);
  function ropenModal() {
    rsetIsOpen(true);
    document.body.style.overflow = 'hidden'
  }


  function rcloseModal(){
    rsetIsOpen(false);
    document.body.style.overflowY = 'scroll';
  }

  function mopenModal() {
    msetIsOpen(true);
    document.body.style.overflow = 'hidden'
  }


  function mcloseModal(){
    msetIsOpen(false);
    document.body.style.overflowY = 'scroll';
  }

  return(
    <div className="component lighter">
      <h1 className="title">Education</h1>
      <div className="education">
        <div className="school-div" onClick={mopenModal}>
          <img className="school-logo" src={marlboro} alt="Marlboro High School" width="150" height="150" />
          <div className="description-layer">
            <p className="school-title">Marlboro High School</p>
          </div>
        </div>
        <div className="school-div" onClick={ropenModal}>
          <img className="school-logo" src={rutgers} alt="Rutgers University" width="150" height="150" />
          <div className="description-layer">
            <p className="school-title">Rutgers University</p>
          </div>
        </div>
      </div>
      <Modal
        closeTimeoutMS={1000}
        isOpen={rmodalIsOpen}
        onRequestClose={rcloseModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="rutgers">
          <h2 className="school">Rutgers University New Brunswick<br />(2019-2022)</h2>
          <img className="modal-pics" src={rutgerslong} alt="Rutgers University" width="60%" />
          <h3 className="category">Degree: Bachelors of Science in Computer Science</h3>
          <h3 className="category">Relevant Coursework</h3>
          <ul className="class">
            <li className="class">Data Structures and Algorithms</li>
            <li className="class">Software Engineering</li>
            <li className="class">Databases</li>
            <li className="class">Discrete Structures I/II</li>
            <li className="class">Computer Architecture</li>
            <li className="class">Systems Programming</li>
            <li className="class">Internet Technology</li>
            <li className="class">Data Science</li>
            <li className="class">Distributed Systems</li>
            <li className="class">Graduate Programming Languages and Compilers</li>
            <li className="class">Graduate Operating Systems Theory</li>
          </ul>
          <h3 className="category">GPA: 3.95/4.0</h3>
          <h1 className="category">Extracurriculars</h1>
          <div className="USACS">
            <h2 className="club">Undergraduate Students Computer Science (USACS) (2019-2021) </h2>
            <img className="modal-pics" src={usacs} alt="USACS" width="60%" />
            <p className="description">For the 2020-2021 school year, I was the Education Director and was in charge of bringing in speakers and organizing the mentorship program, and hosting biweekly paired programming sessions where students could get mock interview practice.</p>
            <h2 className="club">Fizzbuzz (2019-2021)</h2>
            <img className="modal-pics" src={fizzbuzz} alt="Fizzbuzz" width="30%"/>
            <p className="description"> For Fall 2020, I was the Education Director and was in charge of creating and hosting a weekly interview prep workshop that teaches undergraduates the basics of interviewing and how to tackle technical questions. For Spring 2021, I was President and was in charge of hosting paired programming sessions, organizing alumni mock interviews, and overseeing the FizzBuzz mentorship program.</p>
          </div>
          <button className="modalButton" onClick={rcloseModal}><i class="fas fa-times"></i></button>
        </div>
      </Modal>
      <Modal
        closeTimeoutMS={1000}
        isOpen={mmodalIsOpen}
        onRequestClose={mcloseModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="marlboro">
          <h2 className="school">Marlboro High School (2015-2019)</h2>
          <img className="modal-pics" src={marlboro} alt="Marlboro High School" width="30%" />
          <h3 className="category">Degree: High School Diploma</h3>
          <h3 className="category">Relevant Courses</h3>
          <ul className="class">
            <li className="class">AP Computer Science A</li>
            <li className="class">AP Computer Science Principles</li>
            <li className="class">AP Calculus BC</li>
            <li className="class">AP Physics 1/2</li>
          </ul>
          <button className="modalButton" onClick={mcloseModal}><i class="fas fa-times"></i></button>
        </div>
      </Modal>
    </div>
  );
}

export default Education;
