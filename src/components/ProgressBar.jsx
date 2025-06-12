import React from "react";
import "./ProgressBar.css";

function ProgressBar({ value, max }) {
  const percent = Math.floor((value / max) * 100);
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${percent}%` }}>
        <span className="progress-label">{percent}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;