import React from "react";
import "./Careers.css";
import { FaSearch } from "react-icons/fa";

export default function Careers() {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>
            LOVE CODING NINJAS? <br />
            <span>YOU’LL FIT RIGHT IN.</span>
          </h1>
          <p>
            Join our mission to empower students with the skills they need to
            succeed in the tech world.
          </p>
        </div>
      </section>

      {/* Job Filters */}
      <section className="job-filters">
        <div className="filter-grid">
          <input type="text" placeholder="Search by Job Title" />
          <select>
            <option>Select Department</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
          <select>
            <option>Select Location</option>
            <option>Remote</option>
            <option>Bangalore</option>
            <option>Delhi</option>
          </select>
          <div className="experience-inputs">
            <label>Experience (Yrs)</label>
            <div>
              <input type="number" placeholder="From" />
              <input type="number" placeholder="To" />
            </div>
          </div>
          <select>
            <option>Select Employment Type</option>
            <option>Full-time</option>
            <option>Internship</option>
          </select>
          <button className="search-btn">
            <FaSearch /> Search
          </button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="job-listings">
        <h2>Current Openings</h2>
        <p>
          Thanks for checking out our job openings! If you don’t see any open
          positions, please submit your CV and we’ll get back to you when a
          suitable opportunity arises.
        </p>

        <div className="jobs">
          {/* Example Job Card */}
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Experience:</strong> 1-3 years</p>
            <button>Apply Now</button>
          </div>

          <div className="job-card">
            <h3>Backend Developer</h3>
            <p><strong>Location:</strong> Bangalore</p>
            <p><strong>Experience:</strong> 2-5 years</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}