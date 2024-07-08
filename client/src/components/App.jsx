import React, { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import './App.css';

function App() {
  // useEffect(() => {
  //   document.body.style.backgroundColor = '#E5E3E2';
  // }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="left-half">
          <img src="profile-photo.jpeg" alt="Michael DiPasquale" className="profile-photo" />
          <h2 className="profile-name">Michael DiPasquale</h2>
          <p className="profile-title">Full Stack Web Developer</p>
          <div className="social-icons">
            <a href="https://github.com/mdipasqu13" target="_blank" rel="noopener noreferrer">
              <img src="GitHubIcon.jpg" alt="GitHub" className="social-icon" />
            </a>
            <a href="www.linkedin.com/in/michael-dipasquale313" target="_blank" rel="noopener noreferrer">
              <img src="LinkedInIcon.jpeg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:michaeldipasquale313@gmail.com">
              <img src="GmailIcon.png" alt="Gmail" className="social-icon" />
            </a>
          </div>
          <a href="mailto:michaeldipasquale313@gmail.com" className="email-link">
            michaeldipasquale313@gmail.com
          </a>
        </div>
        <div className="right-half">
          <Header />
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;