import React from "react";
import sportsScienceImg from "../assets/sports-science.jpeg";
import "./Hero.css";

const Hero = ({ setPage }) => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={sportsScienceImg} alt="Sports Science" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="dot"></span>
          Performance Centre — Dubai
        </div>

        <h1 className="hero-title">
          WHERE ATHLETES<br />
          <span>ARE BUILT.</span>
        </h1>

        <p className="hero-sub">
          Science-backed training, rehabilitation & biomechanical assessment<br />
          for athletes who demand more.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
            Book Assessment ↗
          </button>
          <button className="btn-outline" onClick={() => setPage("services")}>
            Our Services
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Athletes Treated</span>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <span className="stat-num">8+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <span className="stat-num">98%</span>
            <span className="stat-label">Recovery Rate</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">SCROLL</div>
    </section>
  );
};

export default Hero;
