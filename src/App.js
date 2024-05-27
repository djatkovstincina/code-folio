import React from 'react';
import './App.scss';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      link: "#"
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>About me</h2>
          <p>this is a breif description about me.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email <a href="mailto:ndjatkov@gmail.com">ndjatkov@gmail.com</a></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
