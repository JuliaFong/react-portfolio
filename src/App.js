import React, { Component } from 'react'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Project from './Components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
