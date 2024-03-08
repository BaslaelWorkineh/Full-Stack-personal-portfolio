import React from 'react';
import imgh from './assets/img/services/modal-img.jpg'
import Model from 'react-modal'

const ServicePopup = ({visible, onClose}) => {
    
    return (
        <>
       
         <Model isOpen={visible} id="service-wrapper" className="popup_content_area zoom-anim-dialog fixed inset-0 overflow-y-auto" style={{ overflow: 'auto' ,overlay: {background:'rgba(106, 69, 255, 0.456)',zIndex:9999, overflowY:'scroll'}, }}>
         <button className="close-btn" onClick={onClose} style={{background:'black',padding:20, borderRadius:5,}}>
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
                                    <h2 className="title">UI/UX Design</h2>
                                    <div className="desc">
                                        <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.</p>
                                        <p>Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s English dropped a clanger bite your arm spiffing good time burke Why chancer. Hotpot bum bag cracking goal young delinquent naff bugger cup of chars bender loo it’s all gone to pot the nancy cheeky.</p>
                                        <p>At public school cras bog some dodgy chav Richard Why argy bargy vagabon William bender matie boy, off his nut chancer Jeffrey up the kyver say mufty you mug ummm telling pear shaped Oxford owt to do with me do one so said are you taking his.</p>
                                    </div>

                                    <h3 className="title">Services Process</h3>
                                    <div className="desc">
                                        <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.</p>
                                    </div>
                                    <ul>
                                        <li>Reinvent Your Business to Better</li>
                                        <li>Pioneering the Internet's First</li>
                                        <li>Pioneering the Design World's First</li>
                                        <li>Pioneering the Design World's First</li>
                                        <li>Pioneering the Design World's First</li>
                                        <li>Pioneering the Design World's First</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="tj_main_sidebar">
                                <div className="sidebar_widget services_list">
                                    <div className="widget_title">
                                        <h3 className="title">All Services</h3>
                                    </div>
                                    <ul>
                                        <li className="active">
                                            <button>
                                                <i className="flaticon-design"></i>
                                                Branding Design
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-3d-movie"></i>
                                                3D Animation
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-ux-design"></i>
                                                UI/UX Design
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-web-design"></i>
                                                Web Design
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-ui-design"></i>
                                                App Design
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
                

            </div>
        </Model>
        </>
       
    );
}

export default ServicePopup;
