import React from "react";
import "./PricingRefundPolicy.css";

const PricingRefundPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Pricing, Payment & Refund Policy</h1>
      <p>
        At <strong>SUNRISE MENTORS PRIVATE LIMITED</strong>, we value your trust
        and aim to provide a smooth and transparent experience when you purchase
        our products and services. By using our website and completing a
        purchase, you agree to the following terms:
      </p>

      <div className="policy-section">
        <h2>1. Price Range</h2>
        <p>
          - All prices are determined according to the services offered by us.
          <br />
          - Prices may vary depending on the scope, features, and duration of
          services.
          <br />
          - The typical price range for our products and services on the website
          is <strong>INR 999 to INR 30,00,000</strong>.
        </p>
      </div>

      <div className="policy-section">
        <h2>2. Schedule of Payment</h2>
        <p>
          - Some of our services may be offered for fixed durations (e.g., 15
          days to 2 years).
          <br />- Payment terms and schedules will be clearly defined at the
          time of purchase.
        </p>
      </div>

      <div className="policy-section">
        <h2>3. Price Matching</h2>
        <p>
          - At SUNRISE MENTORS PRIVATE LIMITED, we are committed to offering you
          the best value.
          <br />- If you find a genuine price difference for the same service,
          please contact us, and we will try our best to match it.
        </p>
      </div>

      <div className="policy-section">
        <h2>4. Pricing Errors</h2>
        <p>
          - We strive to ensure that all pricing details are accurate.
          <br />- In case of any discrepancy or typographical error, we reserve
          the right to cancel or update your order.
        </p>
      </div>

      <div className="policy-section">
        <h2>5. Shopping Cart</h2>
        <p>
          - Items in your shopping cart only reflect current pricing and
          availability.
          <br />- Products/services are not reserved until you complete your
          purchase.
        </p>
      </div>

      <div className="policy-section">
        <h2>6. Refund Policy</h2>
        <p>
          - Refund eligibility depends on the nature of the service purchased.
          <br />- Once services are availed or partially consumed, refunds may
          not be possible.
          <br />- For refund requests, please contact our support team with your
          order details.
        </p>
      </div>
    </div>
  );
};

export default PricingRefundPolicy;