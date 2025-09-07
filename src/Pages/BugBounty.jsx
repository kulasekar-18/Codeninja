import React from "react";
import "./BugBounty.css";

const BugBounty = () => {
  return (
    <div className="bug-container">
      <h1>Bug Bounty Program</h1>
      <p>
        At <strong>SUNRISE MENTORS PRIVATE LIMITED</strong>, we value the
        security of our users and platform. We invite security researchers and
        ethical hackers to report vulnerabilities responsibly.
      </p>

      <div className="bug-section">
        <h2>🔒 Scope</h2>
        <ul>
          <li>Web applications</li>
          <li>Mobile applications</li>
          <li>Public APIs</li>
        </ul>
      </div>

      <div className="bug-section">
        <h2>✅ What We Look For</h2>
        <ul>
          <li>Cross-Site Scripting (XSS)</li>
          <li>SQL Injection</li>
          <li>Authentication bypass</li>
          <li>Privilege escalation</li>
          <li>Exposed sensitive data</li>
        </ul>
      </div>

      <div className="bug-section">
        <h2>❌ Out of Scope</h2>
        <ul>
          <li>Denial of Service (DoS/DDoS)</li>
          <li>Social engineering attacks</li>
          <li>Spam or phishing reports</li>
          <li>Third-party integrations not owned by us</li>
        </ul>
      </div>

      <div className="bug-section">
        <h2>🎁 Rewards</h2>
        <p>
          We provide monetary rewards or recognition in our Hall of Fame,
          depending on the severity of the vulnerability reported.
        </p>
      </div>

      <div className="bug-section">
        <h2>📩 How to Report</h2>
        <p>
          Please send detailed reports to{" "}
          <a href="mailto:security@sunrisementors.com">
            security@sunrisementors.com
          </a>
          . Include steps to reproduce, screenshots, and potential impact.
        </p>
      </div>

      <div className="bug-section">
        <h2>⚖ Responsible Disclosure Policy</h2>
        <p>
          - Do not exploit vulnerabilities for malicious purposes. <br />
          - Allow us reasonable time to fix the issue before public disclosure.{" "}
          <br />
          - Respect user privacy and data protection.
        </p>
      </div>
    </div>
  );
};

export default BugBounty;