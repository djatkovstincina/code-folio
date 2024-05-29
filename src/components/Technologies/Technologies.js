import React from 'react';
import './Technologies.scss';
import TechSlider from '../TechSlider/TechSlider';

const Technologies = () => {
  return (
    <section id="technologies">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">Technologies</h2>
          </div>
          <div className="col-md-12">
            <TechSlider />
          </div>
          <div className="col-md-12">
            <p className="section-text">
              With over a decade of experience in the web development industry, I have honed my skills across a diverse array of technologies. My expertise spans web design, WordPress, and web application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies;