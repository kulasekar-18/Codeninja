import React, { useState } from "react";
import "../styles/Community.css";

export default function StudentChapters() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    collegeName: "",
    collegeCity: "",
    collegeState: "",
    position: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form Submitted! (You can connect backend later)");
  };

  return (
    <div className="student-chapters-container">
      {/* Left Section */}
      <div className="chapters-left">
        <h1>🎓 Welcome to the 10X Club Student Chapter</h1>
        <p>
          We empower students across colleges to build communities, share
          knowledge, and grow together as future tech leaders. Apply today to
          launch a 10X Club in your campus and lead the next wave of innovation.
        </p>
        <a href="/brochure.pdf" className="download-btn" target="_blank">
          📥 Download Brochure
        </a>
      </div>

      {/* Right Section (Form) */}
      <div className="chapters-right">
        <h2>📌 Apply to Open a 10X Chapter</h2>
        <form onSubmit={handleSubmit} className="chapters-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="collegeName"
            placeholder="College Name *"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="collegeCity"
            placeholder="College City *"
            value={formData.collegeCity}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="collegeState"
            placeholder="College State *"
            value={formData.collegeState}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Your Position (e.g., Student Leader)"
            value={formData.position}
            onChange={handleChange}
          />
          <textarea
            name="reason"
            placeholder="Why do you want to open a 10X Chapter in your college?"
            value={formData.reason}
            onChange={handleChange}
            rows="3"
          ></textarea>

          <button type="submit" className="submit-btn">
            🚀 Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}