import React, { useState } from 'react';
import portfolioImg1 from './assets/img/portfolio/1.jpg';
import portfolioImg2 from './assets/img/portfolio/2.jpg';
import portfolioImg3 from './assets/img/portfolio/3.jpg';
import portfolioImg4 from './assets/img/portfolio/4.jpg';
import './Portfolio.css'
import PortfolioPopup from '../components/PortfolioPopup';
import Modal from 'react-modal'


const PortfolioSection = () => {
    
    const [visible, setvisible] = useState(false);

    const onClose = ()=>{
        setvisible(false);
    }

  const [filter, setFilter] = useState('*'); // Initial filter set to show all items
  const [activeButton, setActiveButton] = useState('*'); // Initial active button set to show all items

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
    setActiveButton(filterValue);
  };

  // Define portfolio items with their categories
  const portfolioItems = [
    { image: portfolioImg1, title: 'New Age', description: 'Project was about precision and information.', category: 'uxui' },
    { image: portfolioImg2, title: 'Deloitte', description: 'Project was about precision and information.', category: 'branding' },
    { image: portfolioImg3, title: 'Sebastian', description: 'Project was about precision and information.', category: 'mobile-app' },
    { image: portfolioImg4, title: 'Mochnix', description: 'Project was about precision and information.', category: 'branding' },
    { image: portfolioImg1, title: 'New Age', description: 'Project was about precision and information.', category: 'uxui' },
    { image: portfolioImg2, title: 'Deloitte', description: 'Project was about precision and information.', category: 'branding' },
    { image: portfolioImg3, title: 'Sebastian', description: 'Project was about precision and information.', category: 'mobile-app' },
    { image: portfolioImg4, title: 'Mochnix', description: 'Project was about precision and information.', category: 'branding' }
  ];

  // Filter portfolio items based on the selected category
  const filteredPortfolioItems = filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="portfolio-section" id="works-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Recent Works</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
              <div className="button-group filter-button-group">
                <button onClick={() => handleFilterClick('*')} className={activeButton === '*' ? 'active' : ''}>All</button>
                <button onClick={() => handleFilterClick('uxui')} className={activeButton === 'uxui' ? 'active' : ''}>UX/UI</button>
                <button onClick={() => handleFilterClick('branding')} className={activeButton === 'branding' ? 'active' : ''}>Branding</button>
                <button onClick={() => handleFilterClick('mobile-app')} className={activeButton === 'mobile-app' ? 'active' : ''}>Apps</button>
              </div>
            </div>

            <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
              <div className="portfolio-sizer"></div>
              <div className="gutter-sizer"></div>
              <div className="portfolio-item-wrapper">
                {filteredPortfolioItems.map((item, index) => (
                  <div key={index} className={`portfolio-item ${item.category}`} onClick={()=>{setvisible(true)}} style={{zIndex:9}}>
                    <div className="image-box">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">{item.title}</h3>
                      <p>{item.description}</p>
                      <i className="flaticon-up-right-arrow"></i>
                      <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup"></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortfolioPopup visible={visible} onClose={onClose} />
    </section>
  );
}

export default PortfolioSection;