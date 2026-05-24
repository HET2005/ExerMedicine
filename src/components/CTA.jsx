import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-content">
          <div className="section-label">Ready to Start?</div>
          <h2 className="cta-title">
            YOUR PERFORMANCE<br />
            JOURNEY STARTS<br />
            <span>HERE.</span>
          </h2>
          <p className="cta-sub">
            Book your initial assessment today. We'll map where you are, where you want to be, 
            and build the exact roadmap to get there.
          </p>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => window.open("https://wa.me/9611224751", "_blank")}>
              Book on WhatsApp ↗
            </button>
            <a href="tel:+91 9611224751" className="btn-outline">Call Us</a>
          </div>
        </div>
        <div className="cta-accent-bar"></div>
      </div>
    </section>
  );
};

export default CTA;
