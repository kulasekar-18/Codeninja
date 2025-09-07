import React from "react";
import { Link } from "react-router-dom";
import "./IITCertifications.css"; // optional if you want external css

function IITCertifications() {
  return (
    <div className="iit-container">
      <h1 className="iit-title">IIT Certifications</h1>
      <p className="iit-subtitle">
        Explore certification programs designed for <strong>Graduates</strong> and <strong>College Students</strong>.
      </p>

      <div className="iit-cards">
        {/* Graduates Card */}
        <div className="iit-card">
          <h2>For Graduates</h2>
          <p>
            Professional certifications to boost your career after graduation.
          </p>
          <Link to="/graduates" className="iit-btn">
            Explore Graduates
          </Link>
        </div>

        {/* College Students Card */}
        <div className="iit-card">
          <h2>For College Students</h2>
          <p>
            Build skills while studying and gain an edge before graduation.
          </p>
          <Link to="/college-students" className="iit-btn">
            Explore College Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IITCertifications;