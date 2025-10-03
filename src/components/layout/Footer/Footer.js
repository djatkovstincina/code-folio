import React from 'react';
import './Footer.scss';
import { Social } from '../../common';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='footer-content'>
                            <p>&copy; {new Date().getFullYear()} my code-folio by nemanja djatkov</p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);