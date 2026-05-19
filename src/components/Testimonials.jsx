import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Poojal Naik",
    sport: "Fitness Athlete",
    comment: "Eldho is the best fitness coach. Enjoyed my training session with him. Loved his dedication towards his work. Completely changed my performance.",
    rating: 5,
  },
  {
    name: "Vidhi Shah",
    sport: "Recreational Runner",
    comment: "Dr. Tanvi's outstanding dedication and care were key to my recovery. I'm extremely thankful for her efforts, which made all the difference in my progress.",
    rating: 5,
  },
  {
    name: "Rohan K",
    sport: "Cricket Player",
    comment: "The right place to go either if you have an injury or if you want to become stronger and faster at your game. Amazing Physiotherapy & S&C services! Very professional.",
    rating: 5,
  },
  {
    name: "Hetkumar Patel",
    sport: "Gym Enthusiast",
    comment: "Had a great experience. They gave me personalized care, helped relieve my pain, and focused on my overall health. Highly recommend to anyone needing physiotherapy.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">WHAT ATHLETES SAY</h2>

        <div className="testimonial-featured">
          <div className="quote-mark">"</div>
          <p className="featured-comment">{testimonials[active].comment}</p>
          <div className="featured-meta">
            <div className="stars">{"★".repeat(testimonials[active].rating)}</div>
            <div className="featured-name">{testimonials[active].name}</div>
            <div className="featured-sport">{testimonials[active].sport}</div>
          </div>
        </div>

        <div className="testimonial-nav">
          {testimonials.map((t, i) => (
            <button
              key={i}
              className={`t-dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="t-dot-name">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
