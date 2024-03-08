import React, { useEffect, useRef } from 'react';
import profilepic from './assets/img/hero/user.png'
import Odometer from 'odometer';


const HeroSection = () => {

    const odometerRef = useRef(null);

    useEffect(() => {
        if (odometerRef.current) {
            const odometer = new Odometer({
                el: odometerRef.current,
                value: 12345, // Initial value
                // Additional configuration options can be added here
            });
            odometer.render(); // Render the odometer
        }
    }, []);

    return (
        <section className="hero-section flex items-center" id="intro">
            <div className="intro_text">
                <svg viewBox="0 0 1320 300">
                    <text x="50%" Y="50%" textAnchor="middle">
                        HI
                    </text>
                </svg>
            </div>
            <div className="container">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-6/12">
                        <div className="hero-content-box">
                            <span className="hero-sub-title">I am Baslael Workineh</span>
                            <h1 className="hero-title">Softwar +<br />Web Developer</h1>

                            <div className="hero-image-box md:hidden text-center">
                                <img src={profilepic} alt="" />
                            </div>

                            <p className="lead">I specialize in crafting interactive software systems tailored to meet your unique needs, alongside developing dynamic and engaging websites that captivate your audience.</p>
                            <div className="button-box flex flex-wrap items-center">
                                <a href="#" className="btn tj-btn-secondary">Download CV</a>
                                <ul className="ul-reset social-icons">
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fal fa-basketball"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 hidden md:block">
                        <div className="hero-image-box text-center">
                            <img src={profilepic} alt="" />
                        </div>
                    </div>
                </div>

                <div className="funfact-area">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="funfact-item flex flex-col md:flex-row items-center">
                                <div className="number"><span className="odometer" data-count="14">3</span></div>
                                <div className="text">Years of <br />Experience</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="funfact-item flex flex-col md:flex-row items-center">
                                <div className="number"><span className="odometer" data-count="50">10</span>+</div>
                                <div className="text">Project <br />Completed</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="funfact-item flex flex-col md:flex-row items-center">
                                <div className="number"><span className="odometer" data-count="14">3</span></div>
                                <div className="text">Years of <br />Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
