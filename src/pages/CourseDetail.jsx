import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../SampleData/courses";
import ProgressBar from "../components/ProgressBar";
import "./CourseDetail.css";

function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  // For demo: video/lesson progress
  const [progress, setProgress] = useState(30);

  if (!course) return <div>Course not found.</div>;

  return (
    <div className="course-detail-container">
      <h1>{course.title}</h1>
      <img className="banner" src={course.image} alt={course.title} />
      <p>{course.longDesc}</p>

      <div className="progress-section">
        <h3>Your Progress</h3>
        <ProgressBar value={progress} max={100} />
        <button onClick={() => setProgress(Math.min(progress + 10, 100))}>
          Mark Lesson Complete
        </button>
      </div>

      <div className="video-section">
        <h3>Sample Lesson Video</h3>
        <div className="video-wrapper">
          <iframe
            title="Lesson Video"
            src={course.videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;