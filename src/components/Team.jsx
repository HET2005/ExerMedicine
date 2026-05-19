import React from "react";
import "./Team.css";

// Using the exact same pathing pattern that works in Hero.jsx
import tanviImg from "../assets/tanvi.jpeg";
import eldhoImg from "../assets/eldho.jpeg";
import vysakhImg from "../assets/vyaksh.jpeg";

const team = [
  {
    name: "Dr. Tanvi",
    role: "Head of physiotherapy and biomechanics",
    intro: "Expert in evidence-based rehabilitation and safe, effective injury recovery ensuring athletes return stronger.",
    image: tanviImg, // No quotes, just the variable name
    color: "#e8ff00",
  },
// ... rest of the code stays exactly the same
  {
    name: "Eldho",
    role: "Head of strengthening and conditioning + clinical exercise physiology",
    intro: "Dedicated to pushing physical limits, building resilient strength, and managing chronic performance barriers.",
    image: eldhoImg, // 2. Use the imported variable here without quotes
    color: "#ff4d00",
  },
  {
    name: "Vysakh K A",
    role: "Head of sports massage",
    intro: "Specialized in deep tissue work and myofascial release for optimal athletic recovery and muscle maintenance.",
    image: vysakhImg, // 2. Use the imported variable here without quotes
    color: "#00d4ff",
  }
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-inner">
        <div className="team-header">
          <div className="section-label">The Squad</div>
          <h2 className="section-title">
            THE PEOPLE<br />BEHIND YOUR<br />PERFORMANCE
          </h2>
          <p className="team-intro">
            A specialized, multidisciplinary trio of experts running elite-level protocols — all under one roof.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i} style={{ '--c': member.color }}>
              <div className="team-img-wrap">
                {/* 3. The image source pulls from the array variable */}
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-intro-text">{member.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;