import React from "react";
import "./StudentCertificates.css";

const StudentCertificates = () => {
  // Example data (You can fetch from backend API later)
  const certificates = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      issuedBy: "IIT Delhi",
      date: "June 2025",
      file: "/certificates/webdev.pdf",
    },
    {
      id: 2,
      name: "Python for Data Science",
      issuedBy: "IIT Bombay",
      date: "May 2025",
      file: "/certificates/python.pdf",
    },
    {
      id: 3,
      name: "Machine Learning",
      issuedBy: "IIT Madras",
      date: "April 2025",
      file: "/certificates/ml.pdf",
    },
  ];

  return (
    <div className="certificates-container">
      <h1>🎓 My Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <h2>{cert.name}</h2>
            <p><strong>Issued By:</strong> {cert.issuedBy}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <a href={cert.file} download className="download-btn">
              📥 Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCertificates;