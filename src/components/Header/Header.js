import React from "react";
import './Header.scss';
import { GithubUrl, LinkedInUrl, UpworkUrl } from "../../constants/constants";
import {
    AiFillCode,
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-content">
                            <h1>code-folio</h1>
                            <nav className="navigation">
                                <ul>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#projects">Technologies</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="social">
                                <a href={GithubUrl} target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub size="1.25em" />
                                </a>
                                <a href={LinkedInUrl} target="_blank" rel="noopener noreferrer">
                                    <AiFillLinkedin size="1.25em" />
                                </a>
                                <a href={UpworkUrl} target="_blank" rel="noopener noreferrer">
                                    <AiFillCode size="1.25em" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;