import React from 'react';
import blog1Image from './assets/img/blog/1.jpg';
import blog2Image from './assets/img/blog/2.jpg';
import blog3Image from './assets/img/blog/3.jpg';

const BlogSection = () => {
  return (
    <section id="blog-section" className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">Recent Blogs</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src={blog1Image} alt="" />
                </a>
                <a href="#" className="category">Tutorial</a>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li><i className="fa-light fa-calendar-days"></i> Oct 01, 2022</li>
                    <li><i className="fa-light fa-comments"></i> <a href="#">Comment (0)</a></li>
                  </ul>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">Top 10 UI/UX Designers</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item wow fadeInUp" data-wow-delay=".6s">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src={blog2Image} alt="" />
                </a>
                <a href="#" className="category">TIPS</a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li><i className="fa-light fa-calendar-days"></i> Nov 01, 2022</li>
                    <li><i className="fa-light fa-comments"></i> <a href="#">Comment (0)</a></li>
                  </ul>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">App Development Guides</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item wow fadeInUp" data-wow-delay=".7s">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src={blog3Image} alt="" />
                </a>
                <a href="#" className="category">FREEBIES</a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li><i className="fa-light fa-calendar-days"></i> Dec 01, 2022</li>
                    <li><i className="fa-light fa-comments"></i> <a href="#">Comment (0)</a></li>
                  </ul>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">Learn Graphic Design Free</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
