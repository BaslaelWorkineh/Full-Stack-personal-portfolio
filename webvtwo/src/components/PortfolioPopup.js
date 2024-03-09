import React from 'react';
import Model from 'react-modal';

const PortfolioPopup = ({visible, onClose, projectData}) => {
  // Check if projectData exists before attempting to destructure its properties
  const {title, description, category, client, startDate, designer, images, github, ytlink} = projectData || {};

  return (
    <Model isOpen={visible} id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog" style={{ overlay: { background:'rgba(106, 69, 255, 0.456)', zIndex:9999, overflowY:'scroll' } }}>
      <button className="close-btn" onClick={onClose} style={{background:'black',padding:20, borderRadius:5}}>
        Close
      </button>    
      <div className="popup_modal_img">
        {/* Use a conditional rendering to ensure images array exists */}
        {images && images.length > 0 && <img src={images[0]} alt="" />}
      </div>

      <div className="popup_modal_content">
        <div className="portfolio_info">
          <div className="portfolio_info_text">
            {/* Use default values if projectData is undefined */}
            <h2 className="title">{title || 'Default Title'}</h2>
            <div className="desc">
              {/* Use default description if projectData is undefined */}
              <p>{description || 'Default Description'}</p>
            </div>
            <a href={ytlink} className="btn tj-btn-primary">Youtube Video <i className="fal fa-arrow-right"></i></a>
          </div>
          <div className="portfolio_info_items">
            <div className="info_item">
              <div className="key">Category</div>
              {/* Use default category if projectData is undefined */}
              <div className="value">{category || 'Default Category'}</div>
            </div>
            <div className="info_item">
              <div className="key">Client</div>
              {/* Use default client if projectData is undefined */}
              <div className="value">{client || 'Default Client'}</div>
            </div>
            <div className="info_item">
              <div className="key">Start Date</div>
              {/* Use default start date if projectData is undefined */}
              <div className="value">{startDate || 'Default Start Date'}</div>
            </div>
            <div className="info_item">
              <div className="key">Programmer</div>
              {/* Use default designer if projectData is undefined */}
              <div className="value"><a href="#">{designer || 'Default Programmer'}</a></div>
            </div>
          </div>
        </div>

        <div className="portfolio_gallery owl-carousel">
          {/* Use conditional rendering to ensure images array exists */}
          {images && images.map((image, index) => (
            <div className="gallery_item" key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        {/* Additional dynamic content here */}

      </div>
    </Model>
  );
}

export default PortfolioPopup;
