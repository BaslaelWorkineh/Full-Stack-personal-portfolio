import React from 'react';

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
    return (
        <header className={`tj-header-area header-absolute ${sticky && 'sticky-out'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap align-items-center">

                        <div className="logo-box">
                            <a href="index.html">
                                <img src="assets/img/logo/logo.png" alt="" />
                            </a>
                        </div>

                        <div className="header-info-list hidden md:inline-block">
                            <ul className="ul-reset">
                                <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
                            </ul>
                        </div>

                        <div className="header-menu">
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
                            <a href="#" className="btn tj-btn-primary">Hire me!</a>
                        </div>

                        <div className="menu-bar lg:hidden">
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
