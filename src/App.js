import React, { Component } from 'react'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Header'
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects projectPg={projectPg} />
      </div>
    )
  }
}

export default App;
