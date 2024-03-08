// ServicesSection.js
import React, { useState } from 'react';
import ServicePopup from './ServicePopup';

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(null);
    
    const services = [
        { number: '01', title: 'Branding Design', description: 'I break down complex user experience problems to create integrity-focused solutions that connect billions of people' },
        { number: '02', title: 'Web Design', description: 'I break down complex user experience problems to create integrity-focused solutions that connect billions of people' },
        { number: '03', title: 'UI/UX Design', description: 'I break down complex user experience problems to create integrity-focused solutions that connect billions of people' },
        { number: '04', title: 'Graphics Design', description: 'I break down complex user experience problems to create integrity-focused solutions that connect billions of people' }
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
