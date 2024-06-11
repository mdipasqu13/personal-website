import React from 'react';
// import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="project1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>Description</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="project2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
        <p>Description</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </section>
  );
};

export default Projects;