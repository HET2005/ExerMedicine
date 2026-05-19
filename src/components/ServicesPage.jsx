import React, { useState } from "react";
import "./ServicesPage.css";

const categories = [
  {
    id: "assessment",
    label: "Assessment",
    title: "Biomechanical Assessment",
    tagline: "Data-driven performance mapping",
    description: "Our biomechanical assessment is the foundation of everything we do. Using force plates, 3D motion capture, and video analysis, we identify movement inefficiencies that cause injuries and limit performance — then we fix them.",
    features: [
      "Full gait & running analysis",
      "Force plate jump & landing mechanics",
      "3D joint angle measurement",
      "Sport-specific movement screening",
      "Detailed written report + action plan",
      "Follow-up reassessment included",
    ],
    duration: "90 mins",
    price: "From AED 450",
    color: "#e8ff00",
  },
  {
    id: "sc",
    label: "S&C",
    title: "Strength & Conditioning",
    tagline: "Periodised programs built for your sport",
    description: "Our S&C coaches design sport-specific, periodised programs built around your current fitness level, your sport demands, and your performance goals. From elite athletes to weekend warriors — everyone deserves a proper program.",
    features: [
      "1:1 personal coaching sessions",
      "Online programming available",
      "Sport-specific GPP & SPP phases",
      "Power, speed & agility training",
      "Nutritional guidance integration",
      "Monthly progress testing",
    ],
    duration: "60 mins/session",
    price: "From AED 250/session",
    color: "#ff4d00",
  },
  {
    id: "physio",
    label: "Physiotherapy",
    title: "Physiotherapy & Rehab",
    tagline: "Evidence-based injury treatment",
    description: "From acute injuries to post-surgical rehabilitation, our specialist physiotherapists use the latest evidence-based techniques to get you pain-free and back performing faster than you thought possible.",
    features: [
      "Injury assessment & diagnosis",
      "Manual therapy & joint mobilisation",
      "Dry needling & acupuncture",
      "Exercise rehabilitation programs",
      "Post-surgical rehab (ACL, shoulder etc.)",
      "Return-to-sport protocols",
    ],
    duration: "45–60 mins",
    price: "From AED 300",
    color: "#00d4ff",
  },
  {
    id: "massage",
    label: "Sports Massage",
    title: "Sports Massage",
    tagline: "Accelerate recovery, reduce injury risk",
    description: "Our sports massage therapists specialise in pre-competition activation, post-competition recovery, and ongoing soft tissue maintenance. More than relaxation — this is performance therapy.",
    features: [
      "Deep tissue massage",
      "Myofascial release",
      "Pre-event activation massage",
      "Post-event recovery massage",
      "Trigger point therapy",
      "Cupping therapy",
    ],
    duration: "30–90 mins",
    price: "From AED 180",
    color: "#ff9800",
  },
  {
    id: "icebath",
    label: "Ice Bath & Recovery",
    title: "Ice Bath & Recovery Protocols",
    tagline: "Science-backed recovery systems",
    description: "Recovery is where gains are made. Our recovery suite includes ice baths, contrast therapy, and compression. We build individualised recovery protocols around your training schedule and competition calendar.",
    features: [
      "Cold water immersion (8–12°C)",
      "Contrast bath therapy",
      "Normatec compression therapy",
      "Recovery nutrition guidance",
      "Sleep & HRV coaching",
      "Weekly recovery planning",
    ],
    duration: "30–60 mins",
    price: "From AED 120",
    color: "#7b68ee",
  },
];

const ServicesPage = () => {
  const [active, setActive] = useState("assessment");
  const current = categories.find((c) => c.id === active);

  return (
    <div className="services-page">
      <div className="sp-hero">
        <div className="sp-hero-inner">
          <div className="section-label">Our Services</div>
          <h1 className="section-title">
            EVERY SERVICE.<br />ONE GOAL.
          </h1>
          <p className="sp-hero-sub">
            Science-backed, athlete-first. Every service is designed to move you forward.
          </p>
        </div>
      </div>

      <div className="sp-content">
        <div className="sp-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`sp-tab ${active === cat.id ? "active" : ""}`}
              style={{ '--tc': cat.color }}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="sp-detail">
          <div className="sp-detail-left">
            <div className="sp-tag" style={{ color: current.color }}>{current.tagline}</div>
            <h2 className="sp-title">{current.title}</h2>
            <p className="sp-desc">{current.description}</p>

            <div className="sp-meta">
              <div className="sp-meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-val">{current.duration}</span>
              </div>
              <div className="sp-meta-divider"></div>
              <div className="sp-meta-item">
                <span className="meta-label">Pricing</span>
                <span className="meta-val">{current.price}</span>
              </div>
            </div>

            <button className="btn-primary" onClick={() => window.open("https://wa.me/1234567890", "_blank")}>
              Book This Service ↗
            </button>
          </div>

          <div className="sp-detail-right">
            <div className="sp-features-title">What's Included</div>
            <ul className="sp-features">
              {current.features.map((f, i) => (
                <li key={i} style={{ '--fc': current.color }}>
                  <span className="check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
