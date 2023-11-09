import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Vishal D, a passionate web developer with experience in
          creating modern web applications.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (React, Node.js)</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: Simple Backend Calculator</h3>
          <p>Simple calculator powered by node.js and express.js at the backend</p>
        </div>
        <div className="project">
          <h3>Project 2: Instagram Clone</h3>
          <p>Instagram like frontend</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: example.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/examplename</p>
        <p>GitHub: github.com/exampleusername</p>
      </section>
    </div>
  );
}

export default App;