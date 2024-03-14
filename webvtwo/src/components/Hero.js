import React, { useEffect, useRef } from 'react';
import profilepic from './assets/img/hero/user.png'
import Odometer from 'odometer';
import { FaInstagram, FaReddit, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ThreeD from './threeD';

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
                    <text x="53%" Y="50%" textAnchor="middle">
                        BASLAEL
                    </text>
                </svg>
            </div>
            <div className="container">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-6/12">
                        <div className="hero-content-box">
                            <span className="hero-sub-title wow fadeInRight" data-wow-delay='.3s'>I am Baslael Workineh</span>
                            <h1 className="hero-title wow fadeInLeft" data-wow-delay='0.3s' >Software +<br />Web Developer</h1>

                            <div className="hero-image-box md:hidden text-center">
                                <ThreeD/>
                            </div>

                            <p className="lead wow fadeInLeft" data-wow-delay='0.4s'>I specialize in crafting interactive software systems tailored to meet your unique needs, alongside developing dynamic and engaging websites that captivate your audience.</p>
                            <div className="button-box flex flex-wrap items-center">
                                <a href='https://drive.usercontent.google.com/uc?export=download&id=1iNJQtjSPqGtYWQfP0GxdHr8YW8HOam67' className="btn-17 wow fadeInLeft" data-wow-delay='0.3s' style={{textDecoration:'none'}}> <span className="text-container">
                                    <span className="text">Download CV</span>
                                </span></a>
                                <ul className="ul-reset social-icons wow fadeInRight" data-wow-delay='0.3s'>
                                    <li><a href="https://www.reddit.com/user/Same-Ad8290" target='_blank'><FaReddit /></a></li>
                                    <li><a href="https://www.instagram.com/basketo_w/" target='_blank'><FaInstagram /></a></li>
                                    <li><a href="https://www.linkedin.com/in/baslael-workineh-ayele-131b11248/" target='_blank'><FaLinkedinIn /></a></li>
                                    <li><a href="https://github.com/BaslaelWorkineh" target='_blank'><FaGithub /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 hidden md:block">
                        <div className="hero-image-box text-center wow fadeInUp" data-wow-delay='0.4s'>
                        <ThreeD/>
                        </div>
                    </div>
                </div>

                <div className="funfact-area">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="funfact-item flex flex-col md:flex-row items-center">
                                <div className="number"><span className="odometer" data-count="14">500+</span></div>
                                <div className="text">Linkedin <br />Connections</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4">
                            <div className="funfact-item flex flex-col md:flex-row items-center">
                                <div className="number"><span className="odometer" data-count="50">40</span>+</div>
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
