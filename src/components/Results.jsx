import React from "react";
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import "./Results.css";

const transformations = [
  { 
    name: "Nikankshi", 
    sport: "Tennis", 
    result: "Full rehabilitation and return to competitive court movement.", 
    before: "Complete ACL tear", 
    after: "Back to tennis" 
  },
  { 
    name: "Shibin", 
    sport: "Football", 
    result: "Restored explosive power and cleared for full match play.", 
    before: "Quadriceps tear", 
    after: "Back to football" 
  },
  { 
    name: "Abdullah", 
    sport: "Athletic Performance", 
    result: "Optimized biomechanics, explosive power, and injury resilience.", 
    before: "Performance baseline", 
    after: "Strength & Conditioning peak" 
  },
];

const Results = () => {
  return (
    <section className="results-section" id="results">
      <div className="results-inner">
        
{/* Left Column: Side-by-Side Videos */}
<div className="results-video-grid">
          <div className="video-wrap">
            <video src={v1} autoPlay loop muted playsInline className="result-vid"></video>
            <div className="vid-label">Rehab Phase</div>
          </div>
          {/* REMOVE THE "mt-offset" CLASS FROM THIS LINE BELOW */}
          <div className="video-wrap"> 
            <video src={v2} autoPlay loop muted playsInline className="result-vid"></video>
            <div className="vid-label">Return to Play</div>
          </div>
        </div>
        {/* Right Column: Content & Data */}
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
                    <span className="step-label">Condition</span>
                    <span>{t.before}</span>
                  </div>
                  <div className="t-arrow">→</div>
                  <div className="t-step after">
                    <span className="step-label">Outcome</span>
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