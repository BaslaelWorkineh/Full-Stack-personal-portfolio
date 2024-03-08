import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="row">
          {/* Form Section */}
          <div className="col-lg-6 col-md-7 order-2 order-md-1">
            <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
              <div className="section-header">
                <h2 className="section-title">Let’s work together!</h2>
                <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
              </div>

              <div className="tj-contact-form">
                <form id="contact-form">
                  {/* Form input fields */}
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" name="conName" id="conName" placeholder="First name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" name="conLName" id="conLName" placeholder="Last name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="email" name="conEmail" id="conEmail" placeholder="Email address" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <select name="conService" id="conService" className="tj-nice-select">
                          <option value="" selected disabled>Choose Service</option>
                          <option value="braning">Branding Design</option>
                          <option value="web">Web Design</option>
                          <option value="uxui">UI/UX Design</option>
                          <option value="app">App Design</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <textarea name="conMessage" id="conMessage" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_btn">
                        <button type="submit" className="btn tj-btn-primary">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
            <div className="contact-info-list">
              <ul className="ul-reset">
                {/* Phone */}
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"  data-wow-delay=".4s">
                  <div className="icon-box align-items-center">
                    <FaPhone style={{margin:15}} />
                  </div>
                  <div className="text-box">
                    <p>Phone</p>
                    <a href="tel:0123456789">+01 123 654 8096</a>
                  </div>
                </li>

                {/* Email */}
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                  <div className="icon-box">
                    <MdEmail style={{margin:15}}/>
                  </div>
                  <div className="text-box">
                    <p>Email</p>
                    <a href="mailto:mail@mail.com">gerolddesign@mail.com</a>
                  </div>
                </li>

                {/* Address */}
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                  <div className="icon-box">
                    <FiMapPin style={{margin:15}}/>
                  </div>
                  <div className="text-box">
                    <p>Address</p>
                    <a href="#">Warne Park Street Pine, <br />FL 33157, New York</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
