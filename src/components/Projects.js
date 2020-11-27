import React, {useState} from "react"
import { useScroll } from "react-use-gesture";
import Modal from 'react-modal';
import "./Projects.css"
import { animated, useSpring } from "react-spring";
import iLab from "./pictures/iLabTicketSystem.PNG"
import personalwebsite from "./pictures/personalwebsite.PNG"
import rubusms from "./pictures/rubusms.jpg"
import cave_counters from "./pictures/counters.PNG"
import hackerspace from "./pictures/hackerspace.PNG"


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width: "700px",
    maxHeight: "500px",
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor : 'black',
    borderRadius: '25px'
  }
};

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

function Projects() {
    const [style, set] = useSpring(() => ({
      transform: "perspective(500px) rotateY(0deg)"
    }));
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [img, setImg] = useState("Picture");
    const [info, setInfo] = useState("Info");
    const [name, setName] = useState("Name");
    const [tools, setTools] = useState("Tool");
    const [date, setDate] = useState("Date");
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("200px");
    const [link, setLink] = useState("Link");
    const bind = useScroll(event => {
      set({
        transform: `perspective(500px) rotateY(${
          event.scrolling ? clamp(event.delta[0]) : 0
        }deg)`
      });
    });

    function openModal() {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'
    }


    function closeModal(){
      setIsOpen(false);
      document.body.style.overflowY = 'scroll';
    }

    return(
      <div id= "Projects" className="projects">
        <h1 className="projectsheader">Projects</h1>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img className="project" src={img} alt="project" width={width} height={height} />
          <h3 className="projectTitle">{name}</h3>
          <h4 className="date">{date}</h4>
          <p className="pdescription">{info}</p>
          <p className="tools">Tools: {tools}</p>
          <button className="modalButton"><a href={link} target="_blank"><i class="fab fa-github"></i></a></button>
          <button className="modalButton" onClick={closeModal}><i class="fas fa-times"></i></button>
        </Modal>
        <div className="container" {...bind()}>

          <animated.div
            class="button"
            onClick= { () => {openModal(); setName("RU-BuSMS"); setLink("https://github.com/djwong23/RU-BuSMS"); setImg(rubusms); setInfo("Used Twilio and Flask to create a program that will send a text message with the closest bus stop and bus to take from one Rutgers New Brunswick location to another. The program utilizes the Google Maps API to find the longitude and latitude of the location and check whether it falls into the vicinity of each of the campuses. The user can also optionally input a time in military format to check which buses are running at that time. Used python to parse input and call the Google Maps API."); setTools("Python, Flask, Google Maps API, Twilio API"); setWidth("200px"); setHeight("400px"); setDate("October 2019");} }
            key={rubusms}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${rubusms})`,
              onHover: "gold"
            }}
          />

          <animated.div
            class="button"
            className="ummm"
            onClick= { () => {openModal(); setName("Hackerspace Dashboard"); setLink("https://github.com/usacs/hackerspace"); setImg(hackerspace); setInfo("Used Flask and Python to create a check-in/check-out system for the Rutgers Hackerspace where hardware can be checked out. Database stores user info and all items checked out from the Hackerspace."); setTools("Python, Flask, Pymongo (MongoDB), Docker"); setWidth("400px"); setHeight("250px"); setDate("October 2019 - November 2019");} }
            key={hackerspace}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${hackerspace})`,
              backgroundPosition: 'left'
            }}
          />
          <animated.div
            class="button"
            onClick= { () => {openModal(); setName("iLab Ticket System"); setLink("https://github.com/usacs/iLab-Ticket-System"); setImg(iLab); setInfo("Used Flask and Python to create a ticket system for iLabs where it keeps track of help requests from undergraduates who need assistance. Database stores tickets that were handled and has a login/logout system to mark who resolved the ticket."); setTools("Python, Flask, Pymongo (MongoDB), Docker"); setWidth("400px"); setHeight("250px"); setDate("February 2020 - March 2020");} }
            key={iLab}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${iLab})`,
              backgroundPosition: 'left'
            }}
          />
          <animated.div
            class="button"
            onClick= { () => {openModal(); setName("Cave Counters"); setLink("https://github.com/usacs/cave-counters"); setImg(cave_counters); setInfo("Used React to create a web application that displays counters with the number of days since an event has occured in the Rutgers CS room, the CAVE. The counters increment by 1 at midnight. Counters can be added to the database which is stored using MongoDB and Docker. Backend is programmed in Python with Flask."); setTools("Python, Flask, Pymongo (MongoDB), Docker, React, CSS, Javascript, HTML"); setWidth("375px"); setHeight("275px"); setDate("June 2020");} }
            key={cave_counters}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${cave_counters})`,
            }}
          />
          <animated.div
            class="button"
            onClick= { () => {openModal(); setName("Personal Portfolio"); setLink("https://github.com/RahulNTrivedi/Landing"); setImg(personalwebsite); setInfo("Used React to create a personal portfolio to display projects and my resume. Used Anime.js and Particles.js for the animations and for the background."); setTools("React, CSS, Javascript, HTML"); setWidth("400px"); setHeight("200px"); setDate("May 2020 - July 2020");} }
            key={personalwebsite}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${personalwebsite})`,
              backgroundPosition: 'left'
            }}
          />
        </div>
      </div>
    );

}

export default Projects
