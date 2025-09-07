import React from "react";
import "./PressRelease.css";

const pressReleases = [
  {
    title: "CodeNinja Launches AI-Powered Bootcamp 🚀",
    date: "August 28, 2025",
    summary:
      "We are excited to announce our new AI-driven bootcamp designed to prepare students for cutting-edge careers in Artificial Intelligence and Machine Learning.",
    link: "#",
    image: "https://source.unsplash.com/600x400/?ai,technology",
  },
  {
    title: "Partnership with IITs for Certification Programs 🎓",
    date: "July 15, 2025",
    summary:
      "CodeNinja partners with premier IITs to launch industry-recognized certification courses to boost employability of graduates.",
    link: "#",
    image: "https://source.unsplash.com/600x400/?university,students",
  },
  {
    title: "CodeNinja Raises $10M in Series A Funding 💰",
    date: "June 01, 2025",
    summary:
      "We raised Series A funding to expand global operations and launch new job-ready programs. This investment accelerates our mission to make tech education accessible.",
    link: "#",
    image: "https://source.unsplash.com/600x400/?startup,office",
  },
];

function PressRelease() {
  return (
    <div className="press-container">
      <h1 className="press-title">📰 Press Releases</h1>
      <p className="press-subtitle">
        Stay updated with CodeNinja’s latest announcements, media coverage, and industry updates.
      </p>

      <div className="press-grid">
        {pressReleases.map((press, index) => (
          <div className="press-card" key={index}>
            <img src={press.image} alt={press.title} className="press-img" />
            <div className="press-content">
              <span className="press-date">{press.date}</span>
              <h2>{press.title}</h2>
              <p>{press.summary}</p>
              <a href={press.link} className="press-link">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PressRelease;