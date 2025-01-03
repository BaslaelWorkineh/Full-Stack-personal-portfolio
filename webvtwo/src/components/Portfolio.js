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
  const [selectedProject, setSelectedProject] = useState(null);

  const onClose = () => {
    setvisible(false);
  }
  const handleItemClick = (project) => {
    setSelectedProject(project);
    setvisible(true);
  };


  const [filter, setFilter] = useState('*'); // Initial filter set to show all items
  const [activeButton, setActiveButton] = useState('*'); // Initial active button set to show all items

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
    setActiveButton(filterValue);
  };

  // Define portfolio items with their categories
  const portfolioItems = [
    {
      title: 'Feres Transportaion App(Clone) with React Native',
      description: 'In this project, I aimed to replicate every detail of Ethiopia\'s famous transportation app, Feres, using React Native. The goal was to provide users with an experience that closely resembles using the original app, ensuring familiarity and ease of use. The project involved careful examination and reproduction of various elements, including the user interface components, navigation flow, and functionality. Special attention was given to replicating the fonts, colors, and layout to ensure consistency with the original design. By leveraging the capabilities of React Native, I was able to recreate the core features of the Feres app, such as booking rides, viewing routes, and managing payments. The app provides users with a seamless and intuitive experience, just like the original Feres app, while also showcasing the versatility and power of React Native for building cross-platform mobile applications. Overall, the Feres Clone project serves as a testament to the ability of React Native to replicate complex mobile applications with precision and fidelity, offering users an alternative platform to access the features and services provided by the original app.',
      images: [feresImage, feresImage, feresImage],
      github: 'https://github.com/BaslaelWorkineh/Feres-Clone.git',
      youtube: 'https://www.youtube.com/channel/UC41TiP_i_Nxi6SgY0ogAAUA',
      category: 'mobile-app'
    },
    {
      title: 'Mobile Multiplayer TPS Starter Asset (Available on asset store for only 23.99$)',
      description: 'This starter asset provides essential mechanics like shooting, running, and jumping, alongside aim features, procedural recoil, weapon reloading, bot enemies, and a kill leaderboard. 1. Synchronized Multiplayer. 2. Shooting Mechanics: Aim, Procedural Recoil, Reload(Ammo) system, Gun Switching, Bomb Throwing. 3. Different Abilities: Jumping, Running, Sprinting, Grabbing objects, Throwing Object, Climbing ladder. 4.InteractiveEnvironment: Spring, Player Vanisher, Portal 5. AI Enemy Bot. This content is customizable and adaptable, making it suitable for various game genres, particularly those centered around engaging multiplayer experiences. Available on Asset Store at "https://assetstore.unity.com/preview/276643/892792" for only 23.99$',
      images: [multiplayerImage, 'https://mrbasketoone.vercel.app/static/media/Multiplayer.b2047fed69d4fa349a5e.gif', 'https://mrbasketoone.vercel.app/static/media/multiplayercode.44e2ca70d5b0e96aaef3.png'],
      github: 'No Repo Available for this project',
      youtube: 'ZVfKeEiKNo0',
      category: 'games'
    },
    {
      title: 'Cheap Delala(Java & Postgresql) also with MERN Stack',
      description: 'The House Rental and Sale System developed in Java and Postgresql (also with MERN STACK) is a comprehensive platform designed to provide a user-friendly experience for individuals seeking to rent or purchase houses. With its intuitive user interface, users can easily navigate through the system\'s features. The system incorporates a chat system, allowing seamless communication between buyers and sellers to discuss property details, negotiate terms, and address any inquiries. Additionally, a secure payment system is integrated, enabling buyers to make payments conveniently and securely. The system also includes an advertising system, allowing users to post their houses for rent or sale, reaching a wider audience. As a broker, the system facilitates the agreement process, ensuring a smooth transaction. The broker earns a 5% commission from the agreement, ensuring a fair and profitable business model. Overall, this Java-based House Rental and Sale System offers a comprehensive solution for individuals looking to rent or purchase properties, streamlining the process and providing a user-friendly experience.',
      images: [cheapdelalaImage, 'https://mrbasketoone.vercel.app/static/media/cheapdelala.a35572fd3add1cdb7def.gif', 'https://mrbasketoone.vercel.app/static/media/cheapdelalahomepage.ba77f10fab7318e4cec2.png'],
      github: 'https://github.com/BaslaelWorkineh/Cheap-Delala-V2.git',
      youtube: 'FdykG87GDKg',
      category: 'mobile-app'
    },
    {
      title: 'Slash Dash(C# Unity and Photoshop) in One.5 day',
      description: 'The "2 Day Challenge" was an exhilarating game development endeavor that I embarked on independently. Within a tight timeframe, I successfully created a captivating 2D game using the Unity game engine and implemented it with the C# programming language. Taking inspiration from various sources, I meticulously designed my own unique character and environment, ensuring a visually appealing and immersive gameplay experience. While I incorporated one character from BLACKTHORNPROD, I dedicatedly built all the functionalities from scratch, showcasing my programming skills and problem-solving abilities. Despite the time constraints, I pushed myself to complete the project within just one and a half days, demonstrating my determination and commitment to delivering a polished and fully functional game. This 3 Day Challenge was an incredible opportunity for me to showcase my creativity, technical expertise, and passion for game development.',
      images: [slashdashgameImage, 'https://mrbasketoone.vercel.app/static/media/slashdashexplosion.baca0e523db5580f20e7.png', 'https://mrbasketoone.vercel.app/static/media/enemySlashdash.0d19b057b538625bcca7.png'],
      github: 'https://github.com/BaslaelWorkineh/Slash-Dash_source-code-MyGame.git',
      youtube: 'ImljRwyB-_M',
      category: 'games'
    },
    {
      title: 'Wild Life Simulation(Smart AI Animals)',
      description: 'The video was recorded when the project was in progress but unfortunatly I lost the project due to sudden problem in my comuputer. In this captivating low-poly wildlife simulation, the enchanting world of nature comes to life as foxes and sheep roam freely in their natural habitat. With visuals and details, the simulation showcases the beauty of these creatures and their daily activities. The foxes and sheep engage in a lifelike routine, driven by their basic instincts. Both the foxes and sheep have their own unique needs and behaviors. They diligently search for sustenance, driven by the desire to find what they need most: food, water, or the opportunity to mate. The simulation accurately portrays their hunting and grazing behaviors as they seek out nourishment in their surroundings.The cycle of life continues as the sheep reproduce, bringing new life into the world. With an average of 2 to 6 offspring per birth, the sheep population gradually expands, adding to the diversity of the ecosystem. The foxes, on the other hand, reproduce at a slower pace, typically giving birth to 1 or 2 cubs approximately 9 minutes after mating. As the day transitions into night, the simulation captures the essence of the animals\' natural rhythms. The foxes and sheep find a safe spot to rest and sleep, rejuvenating their energy for the adventures that await them in the following day. Through this immersive low-poly wildlife simulation, viewers can witness the intricate dynamics of the animal kingdom, appreciating the delicate balance between survival, reproduction, and the pursuit of essential needs. It serves as a reminder of the awe-inspiring wonders of nature and the interconnectedness of all living beings in the wild.',
      images: [wildlifeImage, 'https://mrbasketoone.vercel.app/static/media/wildlifegoat.332ddd1430ce5f4cf903.jpg', 'https://mrbasketoone.vercel.app/static/media/wildlife.89266b8d04c8ea242a6b.jpg'],
      github: 'No Repo Available for this project',
      youtube: 'lFQmcj_tWio',
      category: 'algo'
    },
    {
      title: 'MERN Stack Blog',
      description: 'The MERN Stack Blog Portfolio project combines the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack with the versatility of a personal portfolio. This project serves as a dynamic platform for showcasing both technical prowess and personal achievements. Leveraging MongoDB as the database, it allows for seamless storage and retrieval of blog posts, ensuring efficient management of content. Express.js, functioning as the backend framework, facilitates smooth communication between the frontend and the database, ensuring data integrity and security. The frontend, built with React.js, provides an interactive and user-friendly interface for visitors to navigate through the portfolio and access blog content. Utilizing React components, the interface offers a seamless browsing experience, enhancing user engagement and satisfaction. Furthermore, Node.js powers the backend, enabling the efficient handling of server-side operations and facilitating real-time interactions between users and the application. By integrating a blog within a portfolio, this project offers a comprehensive platform for individuals to showcase their skills, projects, and insights in a single cohesive space. Whether it\'s sharing technical tutorials, project updates, or personal reflections, the MERN Stack Blog Portfolio project provides a versatile and customizable platform for individuals to express themselves and connect with their audience',
      images: [blogcodeImage, 'https://mrbasketoone.vercel.app/static/media/blogcodetwo.0a2a38bfa7d27de49991.png', 'https://mrbasketoone.vercel.app/static/media/blogcodefour.45c17d58347c78a05325.png'],
      github: 'https://github.com/BaslaelWorkineh/MERN-STACK-Portfolio.git',
      youtube: 'https://www.youtube.com/channel/UC41TiP_i_Nxi6SgY0ogAAUA',
      category: 'web'
    },
    {
      title: 'Motorbike Physics Using c# and Unity',
      description: 'The motorbike controller, crafted using C# programming language and Blender, is a sophisticated device engineered to elevate the riding experience for motorcycle enthusiasts. Through seamless integration of software and hardware, this controller empowers riders with intuitive control over critical motorcycle functionalities. Leveraging the power of C# programming, it delivers robust performance and precise responsiveness. Blender\'s advanced design capabilities ensure a sleek and ergonomic form factor, seamlessly blending aesthetics with functionality. With the motorbike controller, riders can effortlessly fine-tune throttle response, traction control, and suspension settings to achieve optimal performance and comfort. It represents the perfect fusion of cutting-edge technology and elegant design, enhancing the thrill of motorcycle riding for enthusiasts worldwide.',
      images: [motorImge, 'https://mrbasketoone.vercel.app/static/media/motor.ddb1b74798cc75087830.gif', 'https://mrbasketoone.vercel.app/static/media/Motorbike.33f2b048a6fdc61b57ed.png'],
      github: 'https://github.com/BaslaelWorkineh/Unity-3d-Motorbike-Controller.git',
      youtube: 'sYftUpn_LZY',
      category: 'algo'
    },
    {
      title: 'Good Amharic Books',
      description: 'On Progress',
      images: [goodamharicImage, goodamharicImage, goodamharicImage],
      github: 'https://github.com/eyuuab/good_amharic_book.git',
      youtube: 'https://www.youtube.com/channel/UC41TiP_i_Nxi6SgY0ogAAUA',
      category: 'web'
    },
    {
      title: 'Guzo Travel Package',
      description: 'On Progress',
      images: [blogcodeImage, 'https://mrbasketoone.vercel.app/static/media/blogcode.34c0bbec9938d84a20a0.png', 'https://mrbasketoone.vercel.app/static/media/blogcode.34c0bbec9938d84a20a0.png'],
      github: 'https://github.com/BaslaelWorkineh/GUZO.git',
      youtube: 'https://www.youtube.com/channel/UC41TiP_i_Nxi6SgY0ogAAUA',
      category: 'web'
    }
  ];


  // Filter portfolio items based on the selected category
  const filteredPortfolioItems = filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="portfolio-section" id="works-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Old Works (Will be updated soon)</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">This are some of old projects I have worked on Check'em out.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
              <div className="button-group filter-button-group wow fadeInUp" data-wow-delay='0.4s'>
                <button onClick={() => handleFilterClick('*')} className={activeButton === '*' ? 'active' : ''}>All</button>
                <button onClick={() => handleFilterClick('web')} className={activeButton === 'web' ? 'active' : ''}>Websites</button>
                <button onClick={() => handleFilterClick('mobile-app')} className={activeButton === 'mobile-app' ? 'active' : ''}>Apps</button>
                <button onClick={() => handleFilterClick('games')} className={activeButton === 'games' ? 'active' : ''}>Games</button>
                <button onClick={() => handleFilterClick('algo')} className={activeButton === 'algo' ? 'active' : ''}>Algorithms</button>
              </div>

            </div>

            <div className="portfolio-box wow fadeInUp" data-wow-delay=".4s">
              <div className="portfolio-sizer"></div>
              <div className="gutter-sizer"></div>
              <div className="portfolio-item-wrapper">
                {filteredPortfolioItems.map((item, index) => (
                  <div key={index} className={`wow fadeIn${index % 2 === 0 ? 'Left' : 'Right'} portfolio-item ${item.category}`} onClick={() => { setvisible(true); handleItemClick(item); }} style={{ zIndex: 9 }} data-wow-delay={`${index % 2 === 0 ? '0.4s' : '0.5s'}`}>
                    <div className="image-box">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">{item.title}</h3>
                      <p>{item.description.substring(0, 150)}</p>
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

      <PortfolioPopup visible={visible} onClose={onClose} projectData={selectedProject} />
    </section>
  );
}

export default PortfolioSection;
