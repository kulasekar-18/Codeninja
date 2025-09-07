import React from "react";
import "./HireFromUs.css";
import { FaUsers, FaAward, FaBriefcase, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 import navigation hook

function HireFromUs() {
  const navigate = useNavigate(); // 👈 initialize navigation

  return (
    <div className="hire-hero">
      <div className="overlay" />

      <div className="hire-content">
        <h1 className="hire-title">
          🤝 Hire From <span>CodeNinja</span>
        </h1>
        <p className="hire-desc">
          Partner with us to recruit <span className="highlight">top talent</span>
          trained in industry-leading technologies. Our graduates are job-ready,
          certified, and prepared to make an impact from day one.
        </p>

        {/* Benefits Section */}
        <div className="hire-benefits">
          <div className="benefit-card">
            <FaUsers className="benefit-icon" />
            <h3>Diverse Talent Pool</h3>
            <p>Access candidates from multiple backgrounds & skills.</p>
          </div>
          <div className="benefit-card">
            <FaAward className="benefit-icon" />
            <h3>IIT-Certified</h3>
            <p>Certified by reputed institutions & global tech leaders.</p>
          </div>
          <div className="benefit-card">
            <FaBriefcase className="benefit-icon" />
            <h3>Job-Ready Skills</h3>
            <p>Hands-on projects, real-world training, and internships.</p>
          </div>
          <div className="benefit-card">
            <FaRocket className="benefit-icon" />
            <h3>Fast Hiring</h3>
            <p>Quickly onboard candidates through our placement cell.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="hire-actions">
          <button
            className="btn-hire"
            onClick={() => navigate("/hire-form")} // 👈 navigate to HireForm page
          >
            Hire Now
          </button>
          <button
            className="btn-contact"
            onClick={() => navigate("/contact")} // 👈 optional: navigate to contact
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HireFromUs;