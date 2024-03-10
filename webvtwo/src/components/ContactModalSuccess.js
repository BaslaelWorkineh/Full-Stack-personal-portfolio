import React, { useState, useEffect } from 'react';

const ContactModalSuccess = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleClose = () => {
    setIsVisible(false);
  };

  // Effect to close the modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose(); // Call the handleClose function after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className={`contact_modal `} style={{display: `${isVisible ? 'block' :'none'}`}} id="message_sent" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Message Sent Successfully</strong></span>
            <button type="button" className="close" onClick={handleClose} aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <p>Thank you for contacting me. I will get back to you shortly.<br />Have a great day!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModalSuccess;
