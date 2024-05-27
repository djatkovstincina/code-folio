import React from 'react';
import './Footer.scss';
import { GithubUrl, LinkedInUrl, UpworkUrl } from "../../constants/constants";
import {
    AiFillCode,
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='footer-content'>
                            <p>&copy; {new Date().getFullYear()} my code-folio by nemanja djatkov</p>
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
        </footer>
    )
}

export default Footer;