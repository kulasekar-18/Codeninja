import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="last-updated">Last Updated: Aug 13, 2021</p>

      <section className="terms-section">
        <h2>1. Accounts</h2>
        <p>
          By creating an account, you agree to provide accurate and complete
          information. You are responsible for maintaining the confidentiality
          of your account credentials and for all activities under your account.
        </p>
        <ul>
          <li>Provide valid information (name, email, phone, etc.).</li>
          <li>Do not share your login credentials with others.</li>
          <li>Notify us immediately if you suspect unauthorized access.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>2. User Conduct and Behaviour</h2>
        <p>
          You agree not to misuse our platform or engage in activities that may
          harm, disrupt, or negatively impact others. Prohibited activities
          include:
        </p>
        <ul>
          <li>Uploading or sharing illegal or offensive content</li>
          <li>Attempting to hack, exploit, or bypass security systems</li>
          <li>Misusing services for fraudulent or unlawful purposes</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>3. Course and Content</h2>
        <p>
          All course materials, resources, and content are the intellectual
          property of the company. You may not copy, resell, or distribute
          content without prior written consent.
        </p>
        <ul>
          <li>Downloading courses for resale is strictly prohibited.</li>
          <li>Access to content is granted for personal learning use only.</li>
          <li>Violation may lead to account termination.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>4. Payments and Refunds</h2>
        <p>
          Payments must be completed before gaining full access to premium
          services. Refunds are processed as per our Refund Policy. Any
          fraudulent transactions may result in account suspension.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Intellectual Property</h2>
        <p>
          All content, logos, and trademarks on this website belong to the
          company. Unauthorized use is strictly prohibited.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          We are not liable for indirect damages, data loss, or technical
          interruptions caused by third-party systems. You agree to use our
          platform at your own risk.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of your country of
          residence. Any disputes will be subject to the jurisdiction of local
          courts.
        </p>
      </section>

      <section className="terms-section">
        <h2>8. Contact Us</h2>
        <p>
          For any queries regarding these Terms & Conditions, please contact us
          at: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;