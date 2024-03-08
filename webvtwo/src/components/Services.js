// ServicesSection.js
import React, { useState } from 'react';
import ServicePopup from './ServicePopup';

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(null);
    
    const services = [
        { number: '01', title: 'Web Development', description: 'I create custom digital solutions tailored to your business needs. From sleek designs to robust functionality, we leverage the latest technologies to ensure seamless user experiences across all platforms.' },
        { number: '02', title: 'Mobile App Development', description: 'I provide innovative and user-friendly applications to help businesses thrive in the mobile market.' },
        { number: '03', title: 'Debugging', description: 'In my Debugging service, I expertly identify and resolve software code issues to ensure seamless functionality. With a focus on efficiency and precision, I diagnose bugs of any complexity level.' },
        { number: '04', title: 'Mentorship', description: 'Providing personalized guidance to help individuals navigate their professional and personal growth. Through tailored sessions and resources, as an experienced mentor, I empower mentees to achieve their goals, overcome challenges.' },
        { number: '05', title: 'Game Development', description: 'As the sole developer, my Game Development service is dedicated to bringing your unique vision to life. From conceptualization to execution, I specialize in crafting captivating games across different platforms.' },
        { number: '06', title: 'Low Poly 3D Design', description: 'In my Low Poly 3D Design service, I specialize in creating visually stunning designs with a minimalist aesthetic. Using optimized techniques, I craft captivating scenes ideal for games, animations, and virtual environments.' }
    ];

    const handleServiceClick = (index) => {
        setActiveService(index);
    };
    const [visible, setvisible] = useState(false);

    const onClose = ()=>{
        setvisible(false);
    }

    return (
        <section className="services-section" id="services-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Quality Services</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="services-widget position-relative">
                            {services.map((service, index) => (
                                <div className={`service-item d-flex flex-wrap align-items-center wow fadeInUp ${activeService === index ? 'current' : ''}`} data-wow-delay={0.5 + index * 0.1 + 's'} key={index} onClick={() => {handleServiceClick(index); setvisible(true)}}>
                                    <div className="left-box d-flex flex-wrap align-items-center">
                                        <span className="number">{service.number}</span>
                                        <h3 className="service-title">{service.title}</h3>
                                    </div>
                                    <div className="right-box">
                                        <p>{service.description}</p>
                                    </div>
                                    <i className="flaticon-up-right-arrow"></i>
                                    <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                                </div>
                            ))}
                            <div className="active-bg wow fadeInUp" data-wow-delay=".5s"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ServicePopup visible={visible} onClose={onClose}/>
        </section>
    );
};

export default ServicesSection;
