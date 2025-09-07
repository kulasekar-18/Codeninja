// src/pages/Bootcamp.jsx
import React from "react";

const Bootcamp = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn MERN stack (MongoDB, Express, React, Node) with real projects.",
      duration: "12 Weeks",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript, and React.js.",
      duration: "8 Weeks",
    },
    {
      id: 3,
      title: "Python & Data Science",
      description: "Learn Python, Pandas, NumPy, and Data Analysis.",
      duration: "10 Weeks",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build Android & iOS apps using Flutter.",
      duration: "10 Weeks",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Bootcamp Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <p className="mt-2 text-sm text-gray-500">⏳ {course.duration}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamp;