import React from "react";
import { Link } from "react-router-dom";
import courses from "../SampleData/courses";
import "./CourseList.css";

function CourseList() {
  return (
    <div className="course-list-container">
      <h1>Available Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.shortDesc}</p>
            <Link to={`/course/${course.id}`} className="details-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;