import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p><em>Last Updated: August 13, 2021</em></p>

        <p>
          At Coding Ninjas, we value your trust and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, and safeguard your data when you interact with our
          services.
        </p>

        <h2>1. Information Collection</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>(a) Your name and contact details</li>
          <li>(b) Email address and phone number</li>
          <li>(c) Billing and payment information</li>
          <li>(d) Educational background</li>
          <li>(e) Resume, LinkedIn, or job application details</li>
          <li>(f) Technical data such as IP address and browser type</li>
        </ul>

        <h2>2. Why We Collect Your Information</h2>
        <ul>
          <li>(a) To provide and improve our services</li>
          <li>(b) To communicate with you</li>
          <li>(c) To process payments securely</li>
          <li>(d) To send updates, promotions, or job-related information</li>
          <li>(e) To comply with legal and regulatory requirements</li>
        </ul>

        <h2>3. Use of Your Information</h2>
        <p>
          Your data will only be used for the purposes mentioned above and will
          never be sold to third parties. We may share your data with trusted
          partners or service providers strictly for operational needs.
        </p>

        <h2>4. Cookies</h2>
        <p>
          We may use cookies to enhance your browsing experience. Cookies help
          us analyze traffic, remember your preferences, and improve site
          performance. You can manage cookie settings in your browser.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard practices to protect your information
          from unauthorized access, disclosure, or misuse. However, no system
          is 100% secure.
        </p>

        <h2>6. Your Rights</h2>
        <ul>
          <li>(a) Access, update, or delete your information</li>
          <li>(b) Opt out of promotional emails</li>
          <li>(c) Request a copy of your stored data</li>
          <li>(d) Withdraw consent at any time</li>
        </ul>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out
          at <a href="mailto:support@codingninjas.com">support@codingninjas.com</a>
        </p>
      </div>
    </div>
  );
}