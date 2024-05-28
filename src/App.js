import React, { useState } from 'react';
import './styles/style.scss';
import Header from './components/Header/Header';
// import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import HomeImage from  './images/home.png';
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const filteredProjects = selectedCategory === 'All'
    ? Projects
    : Projects.filter(project => project.category === selectedCategory);
  
  const categories = ['All', ...new Set(Projects.map(project => project.category))];

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
                  <button className="primary-btn" alt="resume" onClick={handleClickResume}>
                    Curriculum vitae
                  </button>
                  <button className="primary-btn" alt="upwork" onClick={handleClickUpwork}>
                    Upwork
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="animation-content">
                  <img src={HomeImage} alt='Hero' className='hero-image'/>
                  {/* <BackgroundAnimation /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className='projects'>
                  <h2 className="section-title">Projects</h2>
                  <div className='filters'>
                    {categories.map(category => (
                      <button
                        key={category}
                        className={'filters-btn ' + (selectedCategory === category ? 'selected' : '')}
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
                {filteredProjects.map((project, index) => (
                  <div className='col-md-4' key={index}>
                    <Project
                      image={project.image}
                      title={project.title}
                      category={project.category}
                      description={project.description}
                      webLink={project.webLink}
                      codeLink={project.codeLink}
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="section-title">Contact</h2>
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
