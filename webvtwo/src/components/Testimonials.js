import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonialsData from './testimonialsData'; // Importing the false data

const TestimonialSection = () => {
  return (
    <section className="testimonial-section" id="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-header">
              <h2 className="section-title wow fadeInLeft" data-wow-delay=".3s">My Client's Stories</h2>
              <p className=" wow fadeInLeft" data-wow-delay=".4s" style={{textAlign:'justify'}}>Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super servicesEmpowering people in new a digital journey with my super servicesEmpowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services Empowering people in new a digital journey with my super services</p>
            </div>
          </div>

          <div className="col-lg-7 col-xl-6 offset-xl-1">
            <div className="testimonials-widget wow fadeInRight" data-wow-delay=".5s">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                dots
                items={2}
              >
                {testimonialsData.map((testimonial, index) => (
                  <div className="testimonial-item" key={index} style={{height:'450px'}}>
                    <div className="top-area d-flex flex-wrap justify-content-between">
                      <div className="logo-box">
                        <img src={testimonial.logo} alt="" />
                      </div>
                      <div className="image-box">
                        <img src={testimonial.userImage} alt="" />
                      </div>
                    </div>
                    <div className="icon-box">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_588)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_588" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="var(--tj-theme-primary)" />
                            <stop offset="1" stopColor="#140C1C" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_589)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_589" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stopColor="var(--tj-theme-primary)" />
                            <stop offset="1" stopColor="#140C1C" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="quote">{testimonial.quote}</p>
                    <h4 className="name">{testimonial.name}</h4>
                    <span className="designation">{testimonial.designation}</span>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
