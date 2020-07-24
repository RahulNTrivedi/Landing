import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Opening from './components/Opening'
import MainContent from './components/MainContent'
import "./App.css"

class App extends React.Component {
  render() {
      ReactDOM.render(
        <div className="features" id="features">
          <Opening />
          <Header />
          <div id ="content" className="content">
            <MainContent />
            <Footer />
          </div>
        </div>,
        document.getElementById('root'));
      return "hello";
  }
}

export default App
