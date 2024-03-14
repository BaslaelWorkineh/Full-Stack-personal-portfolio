import React from 'react';

const ContactModalSuccess = () => {

  return (
    <div className={`contact_modal`}  id="message_sent" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Message Sent Successfully</strong></span>
  
          </div>
          <div className="modal-body">
            <p>Thank you for contacting me. I will get back to you shortly. <strong>Have a great day!</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModalSuccess;
