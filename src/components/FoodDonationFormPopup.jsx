import React from "react";
import "./FoodDonationFormPopup.css";

export default function FoodDonationFormPopup({ onClose }) {
  return (
    <div className="food-donation-popup-overlay">
      <div className="food-donation-popup">
        <button className="food-donation-popup-close" onClick={onClose}>&times;</button>
        <div className="container">
          <h1>Food Donation Form</h1>
          <form>
            <label htmlFor="firstname">First Name*</label>
            <input type="text" placeholder="Enter First Name" name="firstname" />

            <label htmlFor="lastname">Last Name*</label>
            <input type="text" placeholder="Enter Last Name" name="lastname" />

            <label htmlFor="email">Email*</label>
            <input type="email" placeholder="Enter email" name="email" />

            <label htmlFor="contect">Contact*</label>
            <input type="text" placeholder="Enter phone number" name="contect" />

            <label htmlFor="phone">Alternate Phone*</label>
            <input type="text" placeholder="Enter alternate phone" name="phone" />

            <label htmlFor="gender">Gender</label>
            <div className="radio-group">
              <input type="radio" name="gender" /> Male
              <input type="radio" name="gender" /> Female
              <input type="radio" name="gender" /> Other
            </div>

            <label htmlFor="function">Function Type</label>
            <div className="radio-group">
              <input type="radio" name="function" /> Marriage
              <input type="radio" name="function" /> Birthday
              <input type="radio" name="function" /> Others
            </div>

            <label htmlFor="address">Address to collect food*</label>
            <input type="text" placeholder="Enter address" name="address" />

            <label htmlFor="about">About</label>
            <textarea name="about" placeholder="Enter description"></textarea>

            <button type="button">Reset</button>
            <button type="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
