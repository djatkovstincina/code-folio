import React, { useEffect, useState, useRef, useCallback } from "react";
import './Header.scss';
import Social from "../Social/Social";

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
                                <img src="./logo.png" alt="Logo" width={32} height={32} />
                                <h1>code-folio</h1>
                            </div>
                            <div
                                ref={hamburgerRef}
                                className={`hamburger ${isNavOpen ? 'open' : ''}`}
                                onClick={toggleNav}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <nav ref={navRef} className={`navigation ${isNavOpen ? 'open' : ''}`}>
                                <ul>
                                    <li><a onClick={closeNav} href="#projects">Projects</a></li>
                                    <li><a onClick={closeNav} href="#technologies">Technologies</a></li>
                                    <li><a onClick={closeNav} href="#about">About</a></li>
                                    <li><a onClick={closeNav} href="#contact">Contact</a></li>
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
