import React from 'react';

const ContactModalFail = () => {

  return (
    <div className="contact_modal failed" id="message_fail" style={{background:'red'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Error</strong></span>
          </div>
          <div className="modal-body">
            <p style={{color:'white'}}>Oops! Something went wrong, please try again.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModalFail;
