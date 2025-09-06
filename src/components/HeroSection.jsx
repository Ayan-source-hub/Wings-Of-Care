import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/carousel-1.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section custom-hero-section">
      <div className="hero-header-bar">
        <span className="wings-of-care-custom">WINGS OF CARE</span>
      </div>
      <div className="hero-main-content">
        <div className="hero-left">
          <h1>
            WE STRIVE TO CREATE A
            <br />
            WORLD OF EQUALITY,
            <br />
            DIGNITY,{" "}
            <span className="highlight-custom">AND HOPE</span>
          </h1>
          <p className="hero-subtext-custom">
            Together, we uplift the unheard voices, support the underserved, and
            inspire meaningful change—one life, one community at a time.
          </p>
          <div className="hero-buttons-custom">
            <button className="btn-outline-custom">Know More</button>
            <button className="btn-filled-custom">DONATE</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-clip">
            <img
              src={heroImg}
              alt="Children"
              className="hero-image-custom"
            />
            <div className="hero-overlay-clip"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
