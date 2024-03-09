import React, { useState } from 'react';
import feresImage from './assets/img/portfolio/feres.png';
import multiplayerImage from './assets/img/portfolio/multiplayer.png';
import cheapdelalaImage from './assets/img/portfolio/cheapdelala.png';
import slashdashgameImage from './assets/img/portfolio/slashdashgame.png';
import motorImge from './assets/img/portfolio/motor.png';
import wildlifeImage from './assets/img/portfolio/wildlife.png';
import blogcodeImage from './assets/img/portfolio/blogcode.png';
import goodamharicImage from './assets/img/portfolio/goodamharic.png';
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
    { image: feresImage, title: 'Feres Transportaion App(Clone) with React Native', description: 'In this project, I aimed to replicate every detail of Ethiopia\'s famous transportation app, Feres, using React Native. ', category: 'mobile-app' },
    { image: multiplayerImage, title: 'Mobile Multiplayer TPS Starter Asset (Available on asset store for only 23.99$)', description: 'This starter asset provides essential mechanics like shooting, running, and jumping, alongside aim features, procedural recoil, weapon reloading, bot enemies, and a kill leaderboard', category: 'games' },
    { image: cheapdelalaImage, title: 'Cheap Delala(Java & Postgresql) also with MERN Stack', description: 'The House Rental and Sale System developed in Java and Postgresql (also with MERN STACK) is a comprehensive platform designed to provide a user-friendly experience for...', category: 'mobile-app' },
    { image: slashdashgameImage, title: 'Slash Dash(C# Unity and Photoshop) in One.5 day', description: 'The "2 Day Challenge" was an exhilarating game development endeavor that I embarked on independently. Within a tight timeframe, I successfully created a captivating 2D game using the Unity game engine and...', category: 'games' },
    { image: wildlifeImage, title: 'Wild Life Simulation(Smart AI Animals)', description: 'In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With...', category: 'algo' },
    { image: blogcodeImage, title: 'MERN Stack Blog', description: 'The MERN Stack Blog Portfolio project combines the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack with the versatility of a personal portfolio. This project ...', category: 'web' },
    { image: motorImge, title: 'Motorbike Physics Using c# and Unity', description: 'The motorbike controller, crafted using C# programming language and Blender, is a sophisticated device engineered to elevate the riding experience for motorcycle enthu...', category: 'algo' },
    { image: goodamharicImage, title: 'Good Amharic Books', description: 'On Progress', category: 'web' },
    { image: blogcodeImage, title: 'Guzo Travel Package', description: 'On Progress', category: 'web' },
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
              <p className="wow fadeInUp" data-wow-delay=".4s">This are some of the recent projects I have been working on Check'em out.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
              <div className="button-group filter-button-group">
                <button onClick={() => handleFilterClick('*')} className={activeButton === '*' ? 'active' : ''}>All</button>
                <button onClick={() => handleFilterClick('web')} className={activeButton === 'web' ? 'active' : ''}>Websites</button>
                <button onClick={() => handleFilterClick('mobile-app')} className={activeButton === 'mobile-app' ? 'active' : ''}>Apps</button>
                <button onClick={() => handleFilterClick('games')} className={activeButton === 'games' ? 'active' : ''}>Games</button>
                <button onClick={() => handleFilterClick('algo')} className={activeButton === 'algo' ? 'active' : ''}>Algorithms</button>
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