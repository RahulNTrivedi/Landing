import React from 'react'
import Modal from 'react-modal';
import "./stylings/Resume.css"
import resume from "./Resume.pdf"
import rutgers from "./pictures/rutgerslogo.png"
import oracle from "./pictures/Oracle.png"
import longoracle from "./pictures/Oracle-Logo.png"
import rutgerslong from "./pictures/rut.png"

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
  }
};

function Resume(){
  const [rmodalIsOpen, rsetIsOpen] = React.useState(false);
  const [omodalIsOpen, osetIsOpen] = React.useState(false);

  function ropenModal() {
    rsetIsOpen(true);
    document.body.style.overflow = 'hidden'
  }


  function rcloseModal(){
    rsetIsOpen(false);
    document.body.style.overflowY = 'scroll';
  }

  function oopenModal() {
    osetIsOpen(true);
    document.body.style.overflow = 'hidden'
  }


  function ocloseModal(){
    osetIsOpen(false);
    document.body.style.overflowY = 'scroll';
  }

  return(
    <div className="component darker">
      <h1 className="title">Experience</h1>
      <div className="experience">
        <div className="school-div" onClick={oopenModal}>
          <img className="school-logo ologo" src={oracle} alt="Oracle" width="150" />
          <div className="description-layer">
            <p className="school-title">Oracle Cloud Infrastructure</p>
          </div>
        </div>
        <div className="school-div" onClick={ropenModal}>
          <img className="school-logo" src={rutgers} alt="Rutgers" width="150" />
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
        <div className="rutgers-ilab">
          <h1 className="workplace">Rutgers</h1>
          <p className="job-date">September 2021 - May 2022<br />iLab Assistant</p>
          <img className="modal-pics" src={rutgerslong} alt="Oracle" width="50%" />
          <p className="description">During the 2021-2022 school year, I worked as an iLab Assistant and tutored students and answered questions related to projects, iLab machine issues, and coursework from any Computer Science class available at Rutgers University</p>
        </div>
      </Modal>
      <Modal
        closeTimeoutMS={1000}
        isOpen={omodalIsOpen}
        onRequestClose={ocloseModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="oracle">
          <h1 className="workplace">Oracle Cloud Infrastructure</h1>
          <p className="job-date">Summer 2021/Summer 2022<br />Software Engineer Intern</p>
          <img className="school-logo ologo" src={longoracle} alt="Oracle" width="50%" />
          <p className="description">During my 2021 internship, I worked for the Trust and Safety team. Our team was in charge of responding to incidents of customers abusing Oracle Cloud resources, including instances of phishing, pirating, and spamming. Over the course of the summer, I worked on a suite of tools used to speed up workflows for our ops team. One of my projects involved using Python to create a legacy attribution script to get information on OCI Legacy IPs. Additionally, I assisted in porting and creating playbooks, integrations and automations for Trust and Safety workflows in XSOAR to speed up the process of incident handling. My final project involved creating a Python script to automate bulk actioning of incidents from XSOAR </p>
          <p className="description">I am currently working for the summer of 2022 on the Observability UX team for Oracle.</p>
        </div>
      </Modal>
      <div className="paperResume"><a href={resume} download><i class="fas fa-file-pdf"></i></a></div>
    </div>)
}

export default Resume
