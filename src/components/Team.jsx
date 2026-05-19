import React from "react";
import "./Team.css";

const team = [
  {
    name: "Dr. Tanvi Mehta",
    role: "Lead Physiotherapist",
    credentials: "BPT, MPT (Sports)",
    speciality: "ACL & Knee Rehab",
    initials: "TM",
    color: "#e8ff00",
  },
  {
    name: "Eldho Thomas",
    role: "Head S&C Coach",
    credentials: "CSCS, NSCA-CPT",
    speciality: "Power & Speed Dev.",
    initials: "ET",
    color: "#ff4d00",
  },
  {
    name: "Dr. Priya Nair",
    role: "Sports Physio",
    credentials: "BPT, Cert. Sports Med",
    speciality: "Running & Biomechanics",
    initials: "PN",
    color: "#00d4ff",
  },
  {
    name: "Arjun Kapoor",
    role: "Performance Therapist",
    credentials: "BTEC, SMA Cert.",
    speciality: "Sports Massage & Recovery",
    initials: "AK",
    color: "#ff9800",
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-inner">
        <div className="team-header">
          <div className="section-label">The Team</div>
          <h2 className="section-title">
            THE PEOPLE<br />BEHIND YOUR<br />PERFORMANCE
          </h2>
          <p className="team-intro">
            A multidisciplinary team of specialists who've worked at elite level — 
            all under one roof for you.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar" style={{ '--c': member.color }}>
                {member.initials}
              </div>
              <div className="team-info">
                <div className="team-speciality">{member.speciality}</div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <div className="team-creds">{member.credentials}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
