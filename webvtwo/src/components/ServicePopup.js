import React from 'react';
import imgh from './assets/img/services/services.png'
import Model from 'react-modal'
import { FaCode, FaMobileAlt, FaCogs, FaGamepad, FaUserFriends, FaBug } from 'react-icons/fa'; // Importing icons from react-icons

const ServicePopup = ({ visible, onClose }) => {

    return (
        <>
            <Model isOpen={visible} id="service-wrapper" className="popup_content_area zoom-anim-dialog fixed inset-0 overflow-y-auto" style={{ overflow: 'auto', overlay: { background: 'rgba(106, 69, 255, 0.456)', zIndex: 9999, overflowY: 'scroll' }, }}>
                <button className="close-btn" onClick={onClose} style={{ background: 'black', padding: 20, position:'absolute' }}>
                    Close
                </button>
                <div className="popup_modal_img">
                    <img src={imgh} alt="" />
                </div>

                <div className="popup_modal_content">
                    <div className="service_details">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <div className="service_details_content">
                                    <div className="service_info">
                                        <h6 className="subtitle">SERVICES</h6>
                                        <h2 className="title">All My Services</h2>
                                        <div className="desc">
                                            <p>I create custom digital solutions tailored to your business needs. From sleek designs to robust functionality, we leverage the latest technologies to ensure seamless user experiences across all platforms.</p>

                                            <p>I provide innovative and user-friendly applications to help businesses thrive in the mobile market. We utilize cutting-edge technologies to deliver high-quality, customized solutions that meet your unique needs and exceed expectations.</p>

                                            <p>As the sole developer, my Game Development service is dedicated to bringing your unique vision to life. From conceptualization to execution, I specialize in crafting captivating games across different platforms.</p>

                                            <p>Providing personalized guidance to help individuals navigate their professional and personal growth. Through tailored sessions and resources, as an experienced mentor, I empower mentees to achieve their goals, overcome challenges, and unlock their full potential.</p>

                                            <p>In my Debugging service, I expertly identify and resolve software code issues to ensure seamless functionality. With a focus on efficiency and precision, I diagnose bugs of any complexity level, ensuring robust and error-free applications.</p>

                                            <p>In my Low Poly 3D Design service, I specialize in creating visually stunning designs with a minimalist aesthetic. Using optimized techniques, I craft captivating scenes ideal for games, animations, and virtual environments. Partner with me to bring your creative visions to life.</p>

                                            <p>Partner with me for quality projects.</p>

                                        </div>

                                        <h3 className="title">About Me and My Services</h3>
                                        <div className="desc">
                                            <p>I'm a dedicated professional offering expertise in:</p>
                                        </div>
                                        <ul>
                                            <li>Web Development</li>
                                            <li>Mobile App Development</li>
                                            <li>Game Development</li>
                                        </ul>
                                        <div className="desc">
                                            <p>Key highlights of my services:</p>
                                        </div>
                                        <ul>
                                            <li>Quality Assurance</li>
                                            <li>Client Satisfaction</li>
                                            <li>Innovation</li>
                                            <li>Collaboration</li>
                                            <li>Support & Maintenance</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <div className="tj_main_sidebar">
                                    <div className="sidebar_widget services_list">
                                        <div className="widget_title">
                                            <h3 className="title">Summary</h3>
                                        </div>


                                        <ul>
                                            <li className="active">
                                                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>WEB Development</span> {/* Text first */}
                                                    <FaCode /> {/* Icon next */}
                                                </button>
                                            </li>
                                            <li>
                                                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>App Development</span> {/* Text first */}
                                                    <FaMobileAlt /> {/* Icon next */}
                                                </button>
                                            </li>
                                            <li>
                                                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>System Design</span> {/* Text first */}
                                                    <FaCogs /> {/* Icon next */}
                                                </button>
                                            </li>
                                            <li>
                                                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>Game Development</span> {/* Text first */}
                                                    <FaGamepad /> {/* Icon next */}
                                                </button>
                                            </li>
                                            <li>
                                                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>Mentorship</span> {/* Text first */}
                                                    <FaUserFriends /> {/* Icon next */}
                                                </button>
                                            </li>
                                            <li>
                                                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>Debugging</span> {/* Text first */}
                                                    <FaBug /> {/* Icon next */}
                                                </button>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="sidebar_widget contact_form">
                                        <div className="widget_title">
                                            <h3 className="title">Get in Touch</h3>
                                        </div>

                                        <form action="index.html">
                                            <div className="form_group">
                                                <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                                            </div>
                                            <div className="form_group">
                                                <input type="email" name="semail" id="semail" placeholder="Email" autoComplete="off" />
                                            </div>
                                            <div className="form_group">
                                                <textarea name="smessage" id="smessage" placeholder="Your message" autoComplete="off"></textarea>
                                            </div>
                                            <div className="form_btn">
                                                <button className="btn tj-btn-primary" type="submit">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="overlayPopUpService" onClick={onClose}></div>
                </div>
            </Model>
        </>

    );
}

export default ServicePopup;
