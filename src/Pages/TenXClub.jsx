import React from "react";
import "./TenXClub.css";

function TenXClub() {
  return (
    <div className="tenxclub-hero">
      <div className="overlay" />

      <div className="tenxclub-content">
        <h1 className="tenxclub-title">🚀 Welcome to the 10X Club</h1>
        <p className="tenxclub-desc">
          The <span className="highlight">10X Club</span> is an exclusive community for 
          high achievers, innovators, and future leaders. Gain access to mentorship, 
          private networking events, and opportunities with top global companies.
        </p>

        <div className="tenxclub-actions">
          <button className="btn-join">Join Now</button>
          <button className="btn-learn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default TenXClub;