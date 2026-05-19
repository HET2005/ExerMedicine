import React from "react";
import "./Services.css";

const services = [
  {
    num: "01",
    title: "Biomechanical Assessment",
    description: "Full movement analysis using force plates, motion capture, and video analysis to identify inefficiencies and injury risks.",
    tag: "Science",
  },
  {
    num: "02",
    title: "Strength & Conditioning",
    description: "Periodised S&C programs built around your sport demands. Power, speed, resilience — engineered, not guessed.",
    tag: "Performance",
  },
  {
    num: "03",
    title: "Physiotherapy",
    description: "Evidence-based treatment for acute injuries, chronic pain, and post-surgical rehabilitation from specialist physios.",
    tag: "Recovery",
  },
  {
    num: "04",
    title: "Sports Massage",
    description: "Pre & post-competition massage, deep tissue work, and myofascial release to accelerate recovery and reduce DOMS.",
    tag: "Therapy",
  },
  {
    num: "05",
    title: "Ice Bath & Recovery",
    description: "Contrast therapy, cryotherapy tubs, and structured recovery protocols backed by the latest sports science research.",
    tag: "Recovery",
  },
];

const Services = ({ setPage }) => {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            BUILT FOR<br />PERFORMANCE
          </h2>
          <p className="services-intro">
            Every service at ExerMedicine is designed around one principle — athlete-first. 
            No fluff, no generic programs. Just results.
          </p>
          <button className="btn-outline" onClick={() => setPage("services")}>
            View All Services →
          </button>
        </div>

        <div className="services-list">
          {services.map((svc) => (
            <div className="service-item" key={svc.num}>
              <div className="svc-num">{svc.num}</div>
              <div className="svc-body">
                <div className="svc-tag">{svc.tag}</div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.description}</p>
              </div>
              <div className="svc-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
