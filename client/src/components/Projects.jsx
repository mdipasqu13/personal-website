import React from 'react';
// import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="project1.jpg" alt="Calm Space" />
        <h3>Calm Space</h3>
        <p>Calm Space is an app that provides users with a library of filterable meditation audio sessions, records users activity and allows them to easily keep track of their meditation history, record journal entries and earn ‘streaks’ to incentivize practice.
</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="project2.jpg" alt="Game Space" />
        <h3>Game Space</h3>
        <p>Styled after Letterboxd, users can favorite games to add them to their collection and wishlist</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      <div className="project">
        <img src="project3.jpg" alt="Blackjack CLI" />
        <h3>Blackjack CLI</h3>
        <p>Users can simulate a casino experience of blackjack using CLI, complete with sound effects and ascii card art.  Users can make bets and keep track of their winnings. Built in "help" feature utilizes OpenAI, feeding the AI engine the current game state along with card counting logic to provide instructional play suggestions and explanations when asked for. </p>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </section>
  );
};

export default Projects;