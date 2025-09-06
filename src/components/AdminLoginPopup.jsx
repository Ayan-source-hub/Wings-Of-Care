import React from "react";
import "./AdminLoginPopup.css";
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";

export default function AdminLoginPopup({ onClose }) {
  return (
    <div className="admin-login-popup-overlay">
      <div className="admin-login-popup">
        <button className="admin-login-popup-close" onClick={onClose}>&times;</button>
        <div className="login-container">
          <h2 className="form-title">Admin Login</h2>
          <SocialLogin />
          <p className="separator"><span>or</span></p>
          <form action="#" className="login-form">
            <InputField type="email" placeholder="Email address" icon="mail" />
            <InputField type="password" placeholder="Password" icon="lock" />
            <button type="button" className="forgot-password-link link-button">Forgot password?</button>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <p className="signup-prompt">
            Don&apos;t have an account? <button type="button" className="signup-link link-button">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
