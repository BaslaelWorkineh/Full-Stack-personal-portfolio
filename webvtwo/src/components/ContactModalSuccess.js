import React from 'react';

const ContactModalSuccess = () => {
  return (
    <div className="contact_modal" id="message_sent" tabIndex="-1" style={{display:'none'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Message Sent Successfully</strong></span>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <p>Thank you for contacting us. We will get back to you shortly.<br />Have a great day!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModalSuccess;
