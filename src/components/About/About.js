import React, { useState } from 'react';
import './About.scss';
import Avatar from '../../images/avatar.png';
import { AiOutlineLaptop } from "react-icons/ai";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="about-wrap">
              <div className="about-image-wrap">
                <div className="about-image-icon" >
                  <AiOutlineLaptop size="4em" />
                </div>
                <img src={Avatar} alt="About" className="about-image"/>
              </div>
              <div className="about-text-wrap">
                <h2 className="section-title">About</h2>
                <div className={`about-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
                  <p className="section-text">
                    I'm a Frontend Developer with a rich background as a Graphics Engineer and Designer, and a deep passion for Web Development. My journey began in the world of print design, creating diverse products for clients of all sizes. This experience seamlessly transitioned into web design, where I combined my design skills with coding, eventually leading teams in the development of user interfaces for various projects, including websites and e-commerce platforms.
                  </p>
                  <p className="section-text">
                    With over a decade of experience, I have honed my expertise in Frontend Development, specializing in TypeScript, Vue.js, and UI development. My technical proficiency extends to adhering to W3C Accessibility HTML standards, strategically refactoring IT SCSS architecture, and developing comprehensive Design Systems. I have adeptly integrated Storybook components into shared applications within Monorepo Git repositories, delivering engaging and dynamic user interfaces. Additionally, my experience includes MySQL database management and deploying server applications to ensure seamless performance across diverse platforms.
                  </p>
                  <p className="section-text">
                    My passion for UX/UI design is reflected in my ability to create intuitive wireframes, optimize user experiences, and navigate SEO principles using tools like Google Analytics and Webmaster Console. Committed to continuous learning and growth, I am eager to bring my unique blend of skills and insights to new challenges.
                  </p>
                  <p className="section-text">
                    I am enthusiastic about the opportunity to collaborate and contribute to innovative projects. Please feel free to reach out to discuss how my expertise can benefit your business.
                  </p>
                </div>
                <button className="primary-btn" onClick={toggleExpanded}>
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;