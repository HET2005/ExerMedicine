import React from "react";
import "./Footer.css";

const Footer = ({ setPage }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">EXER<span>MEDICINE</span></div>
            <p className="footer-tagline">
              Performance Centre. Science-backed rehabilitation, conditioning and recovery for serious athletes.
            </p>
            <button className="btn-primary" onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
              Book on WhatsApp
            </button>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Services</div>
              <button onClick={() => { setPage("services"); window.scrollTo(0,0); }}>Biomechanical Assessment</button>
              <button onClick={() => { setPage("services"); window.scrollTo(0,0); }}>Strength & Conditioning</button>
              <button onClick={() => { setPage("services"); window.scrollTo(0,0); }}>Physiotherapy</button>
              <button onClick={() => { setPage("services"); window.scrollTo(0,0); }}>Sports Massage</button>
              <button onClick={() => { setPage("services"); window.scrollTo(0,0); }}>Ice Bath & Recovery</button>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Contact</div>
              <a href="tel:+971000000000">+971 00 000 0000</a>
              <a href="mailto:hello@exermedicine.com">hello@exermedicine.com</a>
              <p>Dubai Sports City</p>
              <p>Open: Mon–Sat 7am–9pm</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 ExerMedicine. All rights reserved.</p>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
