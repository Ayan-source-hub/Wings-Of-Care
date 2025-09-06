import React from "react";
import "./EmailModal.css";

const EmailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title" style={{ fontSize: '2.7rem', fontWeight: 700, color: '#44446a', margin: '0 0 0.5rem 0' }}>
          Your Account
        </h2>
        <p className="modal-subtitle" style={{ fontSize: '1.35rem', marginBottom: '1.7rem', fontStyle: 'italic' }}>
          Enter your email to <b>LogIn</b> or <b>Create</b> an account.
        </p>
        <input
          className="modal-input"
          type="email"
          placeholder="roy97346265@gmail.com"
          defaultValue="roy97346265@gmail.com"
          style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 400 }}
        />
        <button className="modal-continue" style={{ background: '#2ecc40', color: '#fff', fontWeight: 400, fontSize: '1.2rem', width: 140, margin: '0 auto', display: 'block' }}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
