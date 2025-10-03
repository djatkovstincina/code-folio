import React from 'react';
import './Contact.scss';
import { PersonalEmail, LinkedInUrl, UpworkUrl } from '../../../constants';
import { PiPaperPlaneTilt, PiLinkedinLogo } from "react-icons/pi";
import { FaUpwork } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 id="contact-heading" className="section-title">Reach me</h2>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="contact-card" role="group" aria-labelledby="email-heading">
              <div className="contact-card-icon" aria-hidden="true">
                <PiPaperPlaneTilt size="1.75em" />
              </div>
              <p className="contact-card-text">
                <span id="email-heading">Email me:</span>
                <a
                  href={"mailto:" + PersonalEmail}
                  aria-label={`Send email to ${PersonalEmail}`}
                >
                  {PersonalEmail}
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="contact-card" role="group" aria-labelledby="linkedin-heading">
              <div className="contact-card-icon" aria-hidden="true">
                <PiLinkedinLogo size="1.75em" />
              </div>
              <p className="contact-card-text">
                <span id="linkedin-heading">LinkedIn:</span>
                <a
                  href={LinkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Nemanja Djatkov's LinkedIn profile (opens in new tab)"
                >
                  Nemanja Djatkov
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="contact-card" role="group" aria-labelledby="upwork-heading">
              <div className="contact-card-icon" aria-hidden="true">
                <FaUpwork size="1.75em" />
              </div>
              <p className="contact-card-text">
                <span id="upwork-heading">UpWork:</span>
                <a
                  href={UpworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Nemanja Djatkov's Upwork profile to start a project (opens in new tab)"
                >
                  Start a project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Contact);