import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Stats from './components/Stats/Stats';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <BrowserRouter>
            {/* <Welcome /> */}
            <Navigation />

            <About />
            <Skills />
            <Stats />
            <Contact />
            <Portfolio />
            <Footer />
            
            {/* <header className="App-header">          
          
            </header> */}
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
