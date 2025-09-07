import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer @ Microsoft",
    feedback:
      "The mentorship and training helped me crack my dream company. The guidance was practical, structured, and industry-focused.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sneha Gupta",
    role: "Frontend Developer @ Swiggy",
    feedback:
      "Amazing community and mentors! The hands-on projects gave me real confidence in interviews.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist @ Amazon",
    feedback:
      "The advanced modules in data science were a game changer. I highly recommend it for anyone aiming high.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h1>What Our Students Say 💬</h1>
      <p className="subtitle">
        Hear from students who transformed their careers with us.
      </p>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.avatar} alt={review.name} className="avatar" />
            <h3>{review.name}</h3>
            <p className="role">{review.role}</p>
            <p className="feedback">“{review.feedback}”</p>
            <div className="rating">
              {"⭐".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;