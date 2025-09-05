import React from "react";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h1 className="title">📜 My Certificates</h1>

      {/* Student Certificates */}
      <section className="cert-section">
        <h2 className="section-title">🎓 Student Certificates</h2>
        <div className="cert-list">
          <div className="cert-card">
            <h3>Web Development (IIT Bombay)</h3>
            <p>Issued: May 2024</p>
          </div>
          <div className="cert-card">
            <h3>Data Structures & Algorithms</h3>
            <p>Issued: Dec 2023</p>
          </div>
        </div>
      </section>

      {/* Professional Certificates */}
      <section className="cert-section">
        <h2 className="section-title">💼 Professional Certificates</h2>
        <div className="cert-list">
          <div className="cert-card">
            <h3>React Developer Certification</h3>
            <p>Issued: Jan 2025</p>
          </div>
          <div className="cert-card">
            <h3>Python for AI & ML</h3>
            <p>Issued: Oct 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;