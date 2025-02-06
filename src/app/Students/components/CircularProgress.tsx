import React from 'react'
interface ProgressI {
    progress: number;
}

const CircularProgress: React.FC<ProgressI> = ({ progress }) => {
    const radius = 10; // Radius of the circle
    const strokeWidth = 3; // Thickness of the progress bar
    const circumference = 2 * Math.PI * radius; // Total circumference
    const offset = circumference - (progress / 100) * circumference; // Dynamic stroke offset
  
    return (
      <svg width="25" height="25" viewBox="0 0 25 25">
        {/* Background Circle */}
        <circle
          cx="12.5"
          cy="12.5"
          r={radius}
          fill="none"
          stroke="#ECF5FF"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx="12.5"
          cy="12.5"
          r={radius}
          fill="none"
          stroke="#006FFD"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 12.5 12.5)" // Rotates to start from the top
        />
      </svg>
    );
  };

export default CircularProgress