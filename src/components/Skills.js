import React, { useState } from "react"
import { useScroll } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import "./Skills.css"
import Modal from 'react-modal';
import java from "./pictures/java_icon.png"
import javascript from "./pictures/javascriptpic.png"
import css from "./pictures/CSS.png"
import html from "./pictures/html.png"
import python from "./pictures/python_icon.png"
import c from "./pictures/C.png"
import mongodb from "./pictures/mongodb.png"
import reactlogo from "./pictures/react.png"
import flask from "./pictures/flask_icon.png"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
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

function Skills() {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [width, setWidth] = useState("100%");
    const [level, setLevel] = useState("Novice");
    const [name, setName] = useState("Name");
    const [style, set] = useSpring(() => ({
      transform: "perspective(500px) rotateY(0deg)"
    }));
    function openModal() {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'
    }


    function closeModal(){
      setIsOpen(false);
      document.body.style.overflowY = 'scroll'
    }

    const bind = useScroll(event => {
      set({
        transform: `perspective(500px) rotateY(${
          event.scrolling ? clamp(event.delta[0]) : 0
        }deg)`
      });
    });

    return(
      <div id= "Skills" className="skills">
        <h1 className="skillsheader">Skills</h1>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 className="langtitle">{name}</h1>
          <div className="bar">
            <div className="progress"  style={{width: width}}>{level}</div>
          </div>
          <button className="close" onClick={closeModal}>Close</button>
        </Modal>
        <div className="container" {...bind()}>
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("75%"); setLevel("Advanced"); setName("Java");} }
            key={java}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${java})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("60%"); setLevel("Proficient"); setName("Javascript");} }
            key={javascript}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${javascript})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("75%"); setLevel("Advanced"); setName("Python");} }
            key={python}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${python})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("60%"); setLevel("Proficient"); setName("CSS");} }
            key={css}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${css})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("60%"); setLevel("Proficient"); setName("HTML");} }
            key={html}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${html})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("75%"); setLevel("Advanced"); setName("C");} }
            key={c}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${c})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("75%"); setLevel("Advanced"); setName("MongoDB");} }
            key={mongodb}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${mongodb})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("50%"); setLevel("Novice"); setName("React");} }
            key={reactlogo}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${reactlogo})`
            }}
          />
          <animated.a
            class="button"
            onClick= { () => {openModal(); setWidth("75%");  setLevel("Advanced"); setName("Flask");} }
            key={flask}
            className="lang"
            style={{
              ...style,
              backgroundImage: `url(${flask})`
            }}
          />
          </div>
      </div>
    );

}
export default Skills
