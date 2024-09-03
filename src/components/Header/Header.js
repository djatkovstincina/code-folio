import React, { useState } from "react";
import './Header.scss';
import Social from "../Social/Social";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-content">
                            <div className="logo">
                                <img src="./logo.png" alt="Logo" width={32} height={32} />
                                <h1>
                                    code-folio
                                </h1>
                            </div>
                            <button className="hamburger" onClick={toggleNav}>
                                ☰
                            </button>
                            <nav className={`navigation ${isNavOpen ? 'open' : ''}`}>
                                <ul>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#technologies">Technologies</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;