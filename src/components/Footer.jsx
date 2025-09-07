import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaCcVisa,
  FaCcPaypal,
  FaGooglePay,
  FaLock,
} from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* decorative glows */}
      <div className="footer-glows" aria-hidden="true">
        <span className="glow glow--orange" />
        <span className="glow glow--blue" />
        <span className="glow glow--purple" />
      </div>

      <div className="footer-inner">
        {/* About */}
        <div className="footer-col footer-about">
          <h2 className="brand">CodeNinja</h2>
          <p className="muted">
            Learn skills that matter. From coding bootcamps to IIT-certified
            programs, we help you level up and unlock your future.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/job-bootcamp">Job Bootcamp</Link></li>
            <li><Link to="/graduates">IIT Certifications for Graduates</Link></li>
            <li><Link to="/college-students">IIT Certifications for College Students</Link></li>
            <li><Link to="/new-launches">New Launches</Link></li>
            <li><Link to="/top-companies">Top Tech Companies</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div className="footer-col">
          <h3>Community</h3>
          <ul>
            <li><Link to="/10x-club">10X Club</Link></li>
            <li><Link to="/student-chapters">Student Chapters</Link></li>
            <li><Link to="/hire">Hire from us</Link></li>
          </ul>

          <h3 style={{ marginTop: 18 }}>Follow Us</h3>
          <div className="socials" role="navigation" aria-label="social links">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Coding Ninjas Section */}
        <div className="footer-col">
          <h3>Coding Ninjas</h3>
          <ul>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/pricing-refund">Pricing & Refund Policy</Link></li>
            <li><Link to="/bug-bounty">Bug Bounty</Link></li>
            <li><Link to="/review">Review</Link></li>
            <li><Link to="/press-release">Press Release</Link></li>
          </ul>
        </div>
      </div>

      {/* Horizontal line before Important Links */}
      <hr className="footer-divider" />

      {/* Important Links Section */}
      <div className="footer-important">
        <h3>Important Links</h3>
        <div className="important-links-grid">
          <div>
            <h4>Job Bootcamp for Professionals</h4>
            <ul>
              <li><Link to="/job-bootcamp">Web Development Bootcamp (MERN & Springboot)</Link></li>
              <li><Link to="/job-bootcamp">Data Analytics Job Bootcamp</Link></li>
            </ul>
          </div>
          <div>
            <h4>IIT Certifications for Graduates</h4>
            <ul>
              <li><Link to="/graduates">Full Stack Web Development – IIT Guwahati</Link></li>
              <li><Link to="/graduates">Data Analytics – IIT Guwahati</Link></li>
              <li><Link to="/graduates">Advanced DSA – IIT Madras</Link></li>
            </ul>
          </div>
          <div>
            <h4>IIT Certifications for College Students</h4>
            <ul>
              <li><Link to="/college-students">Beginner Web Development</Link></li>
              <li><Link to="/college-students">Python for Data Science</Link></li>
              <li><Link to="/college-students">AI & GenAI Foundations</Link></li>
            </ul>
          </div>
          <div>
            <h4>Our New Launches</h4>
            <ul>
              <li><Link to="/new-launches">Advanced Certification in GenAI & Multi Agent Systems</Link></li>
              <li><Link to="/new-launches">Cloud & DevOps Engineering Program</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Section */}
        <h4 style={{ marginTop: "1rem" }}>We Accept Payments</h4>
        <Link to="/payment" className="payments-link">
          <div className="payments">
            <FaCcVisa />
            <FaCcPaypal />
            <FaGooglePay />
            <SiRazorpay />
            <FaLock className="secure" />
          </div>
          <p className="muted">100% Secure Payment – No Cost EMI Available</p>
        </Link>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} <span className="brand">CodeNinja</span>. All rights reserved.
      </div>
    </footer>
  );
}