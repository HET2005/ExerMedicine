import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section" id="location">
      <div className="location-inner">
        <div className="location-content">
          <div className="section-label">Headquarters</div>
          <h2 className="section-title">
            THE EXERMEDICINE<br />FACILITY
          </h2>
          
          <div className="location-details">
            <h3 className="detail-title">Address</h3>
            <p className="detail-text">
              Jayanti Nagar, Horamavu<br />
              Bengaluru, Karnataka 560016
            </p>
          </div>

          <div className="location-details">
            <h3 className="detail-title">Operating Hours</h3>
            <ul className="hours-list">
              <li><span>Mon - Sun</span> <span className="hours-time">6:30 AM - 7:30 PM</span></li>
            </ul>
          </div>

          {/* Standard Google Maps Search URL for the facility */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=ExerMedicine+Jayanti+Nagar+Bengaluru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary map-btn"
          >
            Open in Google Maps ↗
          </a>
        </div>

        <div className="location-map-wrap">
          {/* Grayscale filter applied to map to match the dark theme */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.199411624838!2d77.66535151121087!3d13.02290491370217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1100415982fb%3A0x8fcb8d00c41fdb24!2sJayanti%20Nagar%2C%20Horamavu%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="location-iframe"
          ></iframe>
          <div className="map-overlay-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Location;