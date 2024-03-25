import React from 'react';

const blogItems = [
  { 
    image: "https://cdn4.vectorstock.com/i/1000x1000/04/08/bitcoin-digital-currency-symbol-violet-vector-25460408.jpg",
    category: 'Crypto',
    date: 'Mar 03, 2024',
    title: 'BitCoin\'s All Time High',
    comments: 0,
  },
  { 
    image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    category: 'TIPS',
    date: 'Jan 04, 2024',
    title: 'App Development Guides',
    comments: 0,
  },
  { 
    image: "https://i0.wp.com/iemgroup.s3.amazonaws.com/uploads/sites/7/2022/11/Benefits-Of-studying-Computer-Science.jpg?resize=800%2C445&ssl=1",
    category: 'FREEBIES',
    date: 'Mar 09, 2024',
    title: 'Learn CS at home',
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
                  <a href={`/blog/${item.title}`}>
                    <img src={item.image} alt="" style={{height:300}}/>
                  </a>
                  <a href="/blog" className="category">{item.category}</a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li><i className="fa-light fa-calendar-days"></i> {item.date}</li>
                      <li><i className="fa-light fa-comments"></i> <a href={`/blog/${item.title}`}>Comment ({item.comments})</a></li>
                    </ul>
                  </div>
                  <h3 className="blog-title"><a href={`/blog/${item.title}`}>{item.title}</a></h3>
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
