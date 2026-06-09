import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ page, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle header background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Standard page navigation (Home, Services)
  const navTo = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cross-page smooth scrolling for Team and Results sections
  const navToSection = (e, sectionId) => {
    e.preventDefault(); // Prevents the default harsh jump of anchor tags
    setMenuOpen(false); // Closes the mobile sidebar
    
    if (page !== "home") {
      setPage("home"); // Route back to home if currently on Services
      
      // Wait a tiny bit for the Home page to load into the DOM, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    } else {
      // If already on the home page, just scroll down smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Added inline cursor style so it feels clickable like a link */}
        <div className="logo" onClick={() => navTo("home")} style={{ cursor: "pointer" }}>
          EXER<span>MEDICINE</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button 
            onClick={() => navTo("home")} 
            className={page === "home" ? "active" : ""}
          >
            Home
          </button>
          <button 
            onClick={() => navTo("services")} 
            className={page === "services" ? "active" : ""}
          >
            Services
          </button>
          
          {/* Updated anchor tags with the new click handler */}
          <a 
            href="#team" 
            onClick={(e) => navToSection(e, "team")}
          >
            Team
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => navToSection(e, "testimonials")}
          >
            Results
          </a>
        </nav>

        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;