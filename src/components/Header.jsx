import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTo = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo" onClick={() => navTo("home")}>
          EXER<span>MEDICINE</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button onClick={() => navTo("home")} className={page === "home" ? "active" : ""}>Home</button>
          <button onClick={() => navTo("services")} className={page === "services" ? "active" : ""}>Services</button>
          <a href="#team">Team</a>
          <a href="#testimonials">Results</a>
        </nav>

        <button className="btn-primary nav-cta" onClick={() => {
          window.open("https://wa.me/1234567890", "_blank");
        }}>Book Now</button>

        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
