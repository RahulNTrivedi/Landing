import React from 'react'
import "./stylings/Footer.css"

class  Footer extends React.Component {
  render() {
  return(
      <div id="Contacts" className="darker">
          <footer className="bottom">
            <a target="_blank" rel="noopener noreferrer" className="circle" href="https://www.instagram.com/rahult0705"><i className="fab fa-instagram socials" alt="Instagram"></i></a>
            <a target="_blank" rel="noopener noreferrer" className="circle" href="https://www.linkedin.com/in/rahultrivedi0705/"><i className="fab fa-linkedin socials"></i></a>
            <a target="_blank" rel="noopener noreferrer" className="circle" href="mailto:rahulntriv@gmail.com"><i className="far fa-envelope socials"></i></a>
            <a target="_blank" rel="noopener noreferrer" className="circle" href="https://github.com/RahulNTrivedi"><i className="fab fa-github socials" ></i></a>
          </footer>
      </div>
  );
  }

}
export default Footer
