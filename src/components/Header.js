import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>My Code-Folio</h1>
                        <nav>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Prjects</a></li>
                                <li><a href="#contact">About</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;