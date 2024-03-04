import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <CV />
      <footer>
        <p>&copy; 2024 Luis Gamboa - QA  Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
