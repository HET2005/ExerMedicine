import React from "react";
import "./WhyUs.css";

const reasons = [
  { icon: "⚡", title: "Evidence-Based Only", desc: "Every protocol is grounded in peer-reviewed sports science, not trends or guesswork." },
  { icon: "🎯", title: "Sport-Specific Programming", desc: "We don't give generic programs. Everything is tailored to your sport, position and goals." },
  { icon: "🔬", title: "Lab-Grade Assessment", desc: "Force plates, VO2 max, gait analysis. Data drives every decision we make for you." },
  { icon: "🏆", title: "Elite Practitioners", desc: "Our team has worked with national, regional and professional level athletes across 12+ sports." },
  { icon: "🔄", title: "Integrated Approach", desc: "Physio, S&C, massage and nutrition all under one roof. One team. One plan. No gaps." },
  { icon: "📊", title: "Progress Tracking", desc: "Regular reassessments and measurable KPIs so you always know where you stand." },
];

const WhyUs = () => {
  return (
    <section className="whyus-section" id="why">
      <div className="whyus-inner">
        <div className="whyus-header">
          <div className="section-label">Why ExerMedicine</div>
          <h2 className="section-title">
            NOT YOUR<br />AVERAGE CLINIC
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
