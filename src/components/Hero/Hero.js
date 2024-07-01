import React from "react";
import './Hero.scss';
import { UpworkUrl, ResumeUrl } from '../../constants/constants';
import BackgroundAnimation from '../../components/BackgrooundAnimation/BackgroundAnimation'

const Hero = () => {
    const handleClickUpwork = () => {
        window.open(UpworkUrl, "_blank");
    };
    const handleClickResume = () => {
        window.open(ResumeUrl, "_blank");
    };

    return (
        <section id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h2 className="hero-title">
                            <span>Hello!</span> <br />
                            I'm Nemanja Djatkov<span>.</span>
                        </h2>
                        <p className="hero-text">
                            {/* I am a Graphics Engineer and Designer with a passion for Web Development, who transitioned into entrepreneurship through design, and now lead projects involving design, UX/UI, coding, and business development, with expertise in JavaScript, PHP, SCSS, MySQL, WordPress, SEO, Git and Google Analytics. */}
                            Welcome to my code-folio website! Crafted with React.js and SCSS, this site showcases my latest work and projects. Feel free to explore and see what I've been up to. If you have a project or job offer, don't hesitate to reach out.
                        </p>
                        <div className="hero-button-content">
                            <button className="primary-btn" alt="resume" onClick={handleClickResume}>
                                Curriculum vitae
                            </button>
                            <button className="primary-btn" alt="upwork" onClick={handleClickUpwork}>
                                Upwork
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-animation">
                            <BackgroundAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
