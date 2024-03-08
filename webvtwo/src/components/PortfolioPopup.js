import React from 'react';
import Model from 'react-modal'

const PortfolioPopup = ({visible, onClose}) => {
   

  return (
    <Model isOpen={visible} id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog" style={{ overflow: 'auto' ,overlay: {background:'rgba(106, 69, 255, 0.456)',zIndex:9999, overflowY:'scroll'}, }}>
       <button className="close-btn" onClick={onClose} style={{background:'black',padding:20, borderRadius:5,}}>
                    Close
                </button>    
      <div className="popup_modal_img">
        <img src="./assets/img/portfolio/modal-img.jpg" alt="" />
      </div>

      <div className="popup_modal_content" >
        <div className="portfolio_info">
          <div className="portfolio_info_text">
            <h2 className="title">DStudio</h2>
            <div className="desc">
              <p>They are was greater open above shelter lets itself under appear sixth open gathering made upon can't own above midst gathering gathered he one us saying can't divide.</p>
            </div>
            <a href="#" className="btn tj-btn-primary">live preview <i className="fal fa-arrow-right"></i></a>
          </div>
          <div className="portfolio_info_items">
            <div className="info_item">
              <div className="key">Category</div>
              <div className="value">Web Design</div>
            </div>
            <div className="info_item">
              <div className="key">Client</div>
              <div className="value">Artboard Studio</div>
            </div>
            <div className="info_item">
              <div className="key">Start Date</div>
              <div className="value">August 20, 2023</div>
            </div>
            <div className="info_item">
              <div className="key">Designer</div>
              <div className="value"><a href="#">ThemeJunction</a></div>
            </div>
          </div>
        </div>

        <div className="portfolio_gallery owl-carousel">
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-1.jpg" alt="" />
          </div>
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-2.jpg" alt="" />
          </div>
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-3.jpg" alt="" />
          </div>
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-4.jpg" alt="" />
          </div>
        </div>

        <div className="portfolio_description">
          <h2 className="title">Project Description</h2>
          <div className="desc">
            <p>The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          </div>
        </div>

        <div className="portfolio_story_approach">
          <div className="portfolio_story">
            <div className="story_title">
              <h4 className="title">The story</h4>
            </div>
            <div className="story_content">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
          <div className="portfolio_approach">
            <div className="approach_title">
              <h4 className="title">OUR APPROACH</h4>
            </div>
            <div className="approach_content">
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>
          </div>
        </div>

        <div className="portfolio_navigation">
          <div className="navigation_item prev-project">
            <a href="#" className="project">
              <i className="fal fa-arrow-left"></i>
              <div className="nav_project">
                <div className="label">Previous Project</div>
                <h3 className="title">Sebastian</h3>
              </div>
            </a>
          </div>

          <div className="navigation_item next-project">
            <a href="#" className="project">
              <div className="nav_project">
                <div className="label">Next Project</div>
                <h3 className="title">Qwillo</h3>
              </div>
              <i className="fal fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </Model>
  );
}

export default PortfolioPopup;
