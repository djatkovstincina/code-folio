import React, { useEffect, useState, useRef, useCallback } from "react";
import './Header.scss';
import { Social } from "../../common";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const handleClickOutside = useCallback((event) => {
        if (
            navRef.current && !navRef.current.contains(event.target) &&
            hamburgerRef.current && !hamburgerRef.current.contains(event.target)
        ) {
            closeNav();
        }
    }, []);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            closeNav();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClickOutside, handleKeyDown]);

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="header-content">
                            <div className="logo">
                                <img src="./logo.png" alt="Nemanja Djatkov Code Portfolio Logo" width={32} height={32} />
                                <h1>code-folio</h1>
                            </div>
                            <button
                                ref={hamburgerRef}
                                className={`hamburger ${isNavOpen ? 'open' : ''}`}
                                onClick={toggleNav}
                                aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
                                aria-expanded={isNavOpen}
                                aria-controls="main-navigation"
                                type="button"
                            >
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </button>
                            <nav
                                ref={navRef}
                                className={`navigation ${isNavOpen ? 'open' : ''}`}
                                id="main-navigation"
                                aria-label="Main navigation"
                            >
                                <ul>
                                    <li><a onClick={closeNav} href="#projects" aria-label="Go to Projects section">Projects</a></li>
                                    <li><a onClick={closeNav} href="#technologies" aria-label="Go to Technologies section">Technologies</a></li>
                                    <li><a onClick={closeNav} href="#about" aria-label="Go to About section">About</a></li>
                                    <li><a onClick={closeNav} href="#contact" aria-label="Go to Contact section">Contact</a></li>
                                </ul>
                            </nav>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
