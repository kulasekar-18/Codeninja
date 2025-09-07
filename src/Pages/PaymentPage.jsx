import React from "react";
import "./PaymentPage.css"; // Import custom CSS

export default function PaymentPage() {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_xFcwRMAeGVcb11",
      amount: 50000,
      currency: "INR",
      name: "CodeNinja Academy",
      description: "Course Enrollment Fee",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968250.png",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-page">
      {/* Payment Card */}
      <div className="payment-card">
        <h1>Secure Payment</h1>
        <p>
          Complete your payment to enroll in{" "}
          <span className="highlight">CodeNinja Bootcamp</span>
        </p>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Course:</span>
            <span>Web Development Bootcamp</span>
          </div>
          <div className="summary-row">
            <span>Duration:</span>
            <span>6 Months</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹500</span>
          </div>
        </div>

        {/* Pay Button */}
        <button onClick={handlePayment} className="pay-button">
          Pay ₹500 Now
        </button>

        <p className="secure-text">🔒 100% Secure Payment via Razorpay</p>
      </div>
    </div>
  );
}