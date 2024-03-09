import React from 'react';
import Model from 'react-modal';

const PortfolioPopup = ({ visible, onClose, projectData }) => {
  // Check if projectData exists before attempting to destructure its properties
  const { title, description, category, client, startDate, designer, images, github, ytlink } = projectData || {};
  const copyToClipboard = () => {
    // Check if the GitHub link is available
    if (github) {
      // Copy GitHub link to clipboard
      navigator.clipboard.writeText(github)
        .then(() => {
          // Alert when the link is copied successfully
          alert('GitHub link copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy GitHub link: ', error);
        });
    } else {
      // Alert if GitHub link is not available
      alert('GitHub link not available!');
    }
  };
  return (
    <Model isOpen={visible} id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog" style={{ overlay: { background: 'rgba(106, 69, 255, 0.456)', zIndex: 9999, overflowY: 'scroll' } }}>
      <button className="close-btn" onClick={onClose} style={{ background: 'black', padding: 15, position: 'absolute', color: "white", borderWidth: 2, borderColor: 'white' }}>
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
              <p style={{ textAlign: 'justify' }}>{description || 'Default Description'}</p>
            </div>
            {/* Display GitHub link */}
            <p style={{color:'black', paddingTop:10, fontWeight:900, textDecoration:'underline', fontSize:20, fontFamily:'Arial'}}>Do you want the project?</p>
            <p style={{color:'gray'}}> (1) Open Git Bash.</p>
            <p style={{color:'gray'}}>
              (2) Change the current working directory to the location where you want the cloned directory.</p>
            <p style={{color:'gray'}}>(3) Type git clone, and then paste the URL you copied earlier.</p>
            {github && (
              <div>
                <input value={github} readOnly style={{ color: 'black', width: '80%', background: 'lightgray', padding: 10, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                {/* Button to copy GitHub link to clipboard */}
                <button className="button" onClick={copyToClipboard} style={{ background: 'black', padding: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>Copy</button>
              </div>
            )}
            <a href={ytlink} className="btn tj-btn-primary" target='_blank'>Youtube Video</a>
          </div>


          <div>
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

            <div className="col-lg-5 col-xl-8">
              <div className="tj_main_sidebar">
                <div className="portfolio_info_items sidebar_widget contact_form">
                  <div className="widget_title">
                    <h3 className="title">Get in Touch</h3>
                  </div>
                  <form action="index.html">
                    <div className="form_group">
                      <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <input type="email" name="semail" id="semail" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <textarea name="smessage" id="smessage" placeholder="Your message" autoComplete="off"></textarea>
                    </div>
                    <div className="form_btn">
                      <button className="btn tj-btn-primary" type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    </Model>
  );
}

export default PortfolioPopup;