import React from 'react';
import './Contact.scss';
import { PersonalEmail, LinkedInUrl, UpworkUrl } from '../../constants/constants';
import { PiPaperPlaneTilt, PiLinkedinLogo } from "react-icons/pi";
import { FaUpwork } from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="section-title">Contact</h2>
              </div>
              <div className="col-md-4">
                <div className="contact-card">
                  <PiPaperPlaneTilt size="1.75em" className="contact-card-icon"/>
                  <p className="contact-card-text">
                    <span>Email me:</span>
                    <a href={"mailto:" + PersonalEmail} target="_blank" rel="noopener noreferrer">{PersonalEmail}</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-card">
                  <PiLinkedinLogo size="1.75em" className="contact-card-icon"/>
                  <p className="contact-card-text">
                    <span>Linkedin:</span>
                    <a href={LinkedInUrl} target="_blank" rel="noopener noreferrer">Nemanja Djatkov</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-card">
                  <FaUpwork size="1.75em" className="contact-card-icon"/>
                  <p className="contact-card-text">
                    <span>UpWork:</span>
                    <a href={UpworkUrl} target="_blank" rel="noopener noreferrer">Start a project</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Contact;