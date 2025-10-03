import React from "react";
import './Hero.scss';
import { UpworkUrl, ResumeUrl } from '../../../constants';
import { BackgroundAnimation } from '../../common';

const Hero = () => {
    const handleClickUpwork = () => {
        window.open(UpworkUrl, "_blank");
    };
    const handleClickResume = () => {
        window.open(ResumeUrl, "_blank");
    };

    return (
        <section id="hero" aria-label="Introduction and hero section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="hero-title">
                            <span>Hello!</span> <br />
                            I'm Nemanja Djatkov<span>.</span>
                        </h1>
                        <p className="hero-text">
                            {/* I am a Graphics Engineer and Designer with a passion for Web Development, who transitioned into entrepreneurship through design, and now lead projects involving design, UX/UI, coding, and business development, with expertise in JavaScript, PHP, SCSS, MySQL, WordPress, SEO, Git and Google Analytics. */}
                            Welcome to my code-folio website! Crafted with React.js and SCSS, this site showcases my latest work and projects. Feel free to explore and see what I've been up to. If you have a project or job offer, don't hesitate to reach out.
                        </p>
                        <div className="hero-button-content" role="group" aria-label="Quick actions">
                            <button
                                className="primary-btn"
                                onClick={handleClickResume}
                                aria-label="Download Curriculum Vitae (opens in new tab)"
                            >
                                Curriculum vitae
                            </button>
                            <button
                                className="primary-btn"
                                onClick={handleClickUpwork}
                                aria-label="Visit Upwork profile (opens in new tab)"
                            >
                                Upwork
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-animation" aria-hidden="true">
                            <BackgroundAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Hero);
