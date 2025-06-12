import React from "react";
import courses from "../SampleData/courses";
import ProgressBar from "../components/ProgressBar";
import "./Dashboard.css";

function Dashboard() {
  // Fake progress for demo
  const userProgress = {
    "react101": 75,
    "js-advanced": 30,
    "css-mastery": 100,
  };

  return (
    <div className="dashboard-container">
      <h1>My Dashboard</h1>
      <div className="dashboard-courses">
        {courses.map((course) => (
          <div className="dashboard-course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div>
              <h2>{course.title}</h2>
              <ProgressBar value={userProgress[course.id] || 0} max={100} />
              <span>{userProgress[course.id] || 0}% complete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;