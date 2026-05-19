import React from "react";
import labImg from "../assets/lab-testing.jpeg";
import "./Results.css";

const transformations = [
  { name: "Riya Shah", sport: "Triathlete", result: "Reduced 5K time by 4 mins post biomech fix", before: "Chronic knee pain", after: "Pain-free in 6 weeks" },
  { name: "Aditya Mehta", sport: "Football", result: "Returned to full training after ACL in 5 months", before: "ACL reconstruction", after: "Stronger than pre-injury" },
  { name: "Priya Nair", sport: "CrossFit", result: "Deadlift +40kg after corrective S&C", before: "Lower back issues", after: "Competition-ready" },
];

const Results = () => {
  return (
    <section className="results-section" id="results">
      <div className="results-inner">
        <div className="results-image-col">
          <div className="results-img-wrap">
            <img src={labImg} alt="Performance Testing Lab" />
            <div className="img-label">VO2 Max & Lactate Testing Lab</div>
          </div>
        </div>

        <div className="results-content">
          <div className="section-label">Athlete Transformation</div>
          <h2 className="section-title">
            REAL ATHLETES.<br />REAL RESULTS.
          </h2>

          <div className="transformations">
            {transformations.map((t, i) => (
              <div className="transformation-card" key={i}>
                <div className="t-header">
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-sport">{t.sport}</div>
                  </div>
                  <div className="t-result-badge">Result</div>
                </div>
                <div className="t-journey">
                  <div className="t-step before">
                    <span className="step-label">Before</span>
                    <span>{t.before}</span>
                  </div>
                  <div className="t-arrow">→</div>
                  <div className="t-step after">
                    <span className="step-label">After</span>
                    <span>{t.after}</span>
                  </div>
                </div>
                <p className="t-result">{t.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
