import React from 'react';
import './Technologies.scss';
import { TechSlider } from '../';

const Technologies = () => {
  return (
    <section id="technologies" aria-labelledby="technologies-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 id="technologies-heading" className="section-title">Technologies</h2>
          </div>
          <div className="col-md-12">
            <div role="region" aria-label="Technology skills carousel">
              <TechSlider />
            </div>
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

export default React.memo(Technologies);