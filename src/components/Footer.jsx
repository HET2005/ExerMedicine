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
            <button className="btn-primary" onClick={() => window.open("https://wa.me/9537556915", "_blank")}>
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
              <a href="tel:+91 9537556915">+91 9537556915</a>
              <a href="tel:+91 9611224751">+91 9611224751</a>
              <a href="eldhosunny715@gmail.com">eldhosunny715@gmail.com</a>
              <a href="mailto:ptanvi076@gmail.com">ptanvi076@gmail.com</a>
              <p>Jayanti Nagar - Bengaluru</p>
              <p>Open: Mon–Sat 6:30am–7:30pm</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 ExerMedicine. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/exermedicine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
            <a href="https://www.linkedin.com/company/exermedicine/">LinkedIn</a>
      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
