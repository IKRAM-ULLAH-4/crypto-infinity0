import React from "react";
import { FaTimes } from "react-icons/fa";
import './SecrureLaunchmodel.css';

const SecureLaunchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mailtoLink = `mailto:cryptoinfinitybtm@gmail.com?subject=Excited%20to%20Promote%20My%20Crypto%20Project%20with%20Crypto%20Infinity&body=Hi%20Crypto%20Infinity%2C%0A%0AI%20am%20interested%20in%20securing%20a%20launch%20slot%20for%20my%20crypto%20project.%20Please%20find%20my%20details%20below%3A%0A%0AName%3A%0AEmail%3A%0ATelegram%3A%0AProject%20Name%3A%0ADescription%3A%0A%0AThank%20you%20for%20your%20support%21%0A%0ABest%20Regards%2C`;

  return (
    <div className="modal-overlay animate__animated animate__fadeIn">
      <div className="modal-content text-dark p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Secure Launch Slot</h5>
          <button className="btn btn-link text-dark p-0" onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>
        <p>
          Click the button below to open your default mail client (Gmail, Outlook, etc.) and send us your promotional launch request directly.  
          We've pre-filled all necessary details to make it quick and easy!
        </p>
        <a href={mailtoLink} className="btn btn-primary w-100">
          Send Promotional Email
        </a>
      </div>
    </div>
  );
};

export default SecureLaunchModal;
