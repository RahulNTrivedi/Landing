import React from 'react'
import "./Footer.css"

class  Footer extends React.Component {
  render() {
  return(
    <div className="stuff">
      <div id="Contacts" className="footerbottom">
        <footer className="bottom">
          <a target="_blank" rel="noopener noreferrer" className="circle" href="https://www.instagram.com/rahult0705"><i className="fab fa-instagram socials">Instagram</i></a>
          <a target="_blank" rel="noopener noreferrer" className="circle" href="https://www.linkedin.com/in/rahultrivedi0705/">LinkedIn<i className="fab fa-linkedin socials"></i></a>
          <a target="_blank" rel="noopener noreferrer" className="circle" href="mailto:rahulntriv@gmail.com"><i className="far fa-envelope socials">Email</i></a>
          <a target="_blank" rel="noopener noreferrer" className="circle" href="https://github.com/RahulNTrivedi"><i className="fab fa-github socials" >GitHub</i></a>
        </footer>
        <footer className="attribution">
          Spaceship Icon made by <a className="icon" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className="icon" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </footer>
      </div>
    </div>
  );
  }

}
export default Footer
