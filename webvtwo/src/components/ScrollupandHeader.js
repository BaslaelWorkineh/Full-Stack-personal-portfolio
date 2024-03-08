import React, { useState } from 'react';
import logo from './assets/img/logo/logo.png';

const ScrollUp = () => {
    return (
        <div className="progress-wrap" id="scrollUp">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
    );
};

const Header = ({ sticky }) => {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

    return (
        <header className={`tj-header-area header-absolute ${sticky && 'sticky-out'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap align-items-center">

                        <div className="logo-box">
                            <a href="index.html">
                                <img src={logo} alt="" />
                            </a>
                        </div>

                        <div className={`header-info-list hidden md:inline-block ${menuOpened ? 'opened' : ''}`}>
                            <ul className="ul-reset">
                                <li><a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDbSVfbFxvcfHPTmTQhdGVGRLnlZxTbbdBDrVZWkZhPXqbHdqGcZBmbpQtpZkPKngPQnjnB" target='_blank'>baslaworku@gmail.com</a></li>
                            </ul>
                        </div>

                        <div className={`header-menu ${menuOpened ? 'opened' : ''}`}>
                            <nav>
                                <ul>
                                    <li><a href="#services-section">Services</a></li>
                                    <li><a href="#works-section">Works</a></li>
                                    <li><a href="#resume-section">Resume</a></li>
                                    <li><a href="#skills-section">Skills</a></li>
                                    <li><a href="#testimonials-section">Testimonials</a></li>
                                    <li><a href="#contact-section">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header-button">
                            <a href="https://www.linkedin.com/in/baslael-workineh-ayele-131b11248/" className="btn tj-btn-primary" target='_blank'>Hire me!</a>
                        </div>

                        <div className="menu-bar lg:hidden" onClick={toggleMenu}>
                            <button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { ScrollUp, Header };
