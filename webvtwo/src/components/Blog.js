import React from 'react';
import blog1Image from './assets/img/blog/1.jpg';
import blog2Image from './assets/img/blog/2.jpg';
import blog3Image from './assets/img/blog/3.jpg';

const blogItems = [
  { 
    image: blog1Image,
    category: 'Crypto',
    date: 'Oct 01, 2022',
    title: 'BitCoin\'s All Time High',
    comments: 0,
  },
  { 
    image: blog2Image,
    category: 'TIPS',
    date: 'Nov 01, 2022',
    title: 'App Development Guides',
    comments: 0,
  },
  { 
    image: blog3Image,
    category: 'FREEBIES',
    date: 'Dec 01, 2022',
    title: 'Learn Computer Science at home',
    comments: 0,
  }
];

const BlogSection = () => {
  return (
    <section id="blog-section" className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">Recent Blogs</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">MrBasketo Blog is a platform where I share my thoughts and feelings. Feel free to browse and read whatever catches your interest.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay={0.5 + index * 0.1 + 's'}>
                <div className="blog-thumb">
                  <a href="blog-details.html">
                    <img src={item.image} alt="" />
                  </a>
                  <a href="#" className="category">{item.category}</a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li><i className="fa-light fa-calendar-days"></i> {item.date}</li>
                      <li><i className="fa-light fa-comments"></i> <a href="#">Comment ({item.comments})</a></li>
                    </ul>
                  </div>
                  <h3 className="blog-title"><a href="blog-details.html">{item.title}</a></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
