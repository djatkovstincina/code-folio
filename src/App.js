import React from 'react';
import './styles/style.scss';
import Header from './components/Header/Header';
import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import { Projects, UpworkUrl, ResumeUrl, PersonalEmail } from './constants/constants';

const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
};
const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h2 className="section-title">
                  Hello! <br />
                  I'm Nemanja Djatkov
                </h2>
                <p className="section-text">I am a Graphics Engineer and Designer with a passion for Web Development, who transitioned into entrepreneurship through design, and now lead projects involving design, UX/UI, coding, and business development, with expertise in JavaScript, PHP, SCSS, MySQL, WordPress, SEO, Git and Google Analytics.
                </p>
                <div className="button-content">
                  <button className="primary-btn" alt="upwork" onClick={handleClickUpwork}>
                    Upwork
                  </button>
                  <button className="primary-btn" alt="resume" onClick={handleClickResume}>
                    Resume
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="animation-content">
                  <BackgroundAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Projects</h2>
                {Projects.map((Projects, index) => (
                  <Project
                    key={index}
                    title={Projects.title}
                    description={Projects.description}
                    link={Projects.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Contact</h2>
                <p>Email <a href={"mailto:" + PersonalEmail} target="_blank" rel="noopener noreferrer">{PersonalEmail}</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
