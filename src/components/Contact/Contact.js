import React from 'react';
import './Contact.scss';
import { PersonalEmail } from '../../constants/constants';

const Contact = () => {
    return (
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
    )
}

export default Contact;