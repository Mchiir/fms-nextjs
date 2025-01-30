import React from "react";
import { FaRocket, FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaBrain } from "react-icons/fa";

interface StatsCardProps {
  title: string;
  value: string;
  percentage: string;
  type: "performance" | "decline" | "students" | "lessons" | "ai" | "books";
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, percentage, type }) => {
  let icon;
  let progressColor;
  let progressValue;

  switch (type) {
    case "performance":
      icon = <FaRocket className="text-blue-500 text-2xl" />;
      progressColor = "#4CAF50"; // Green
      progressValue = 87;
      break;
    case "decline":
      icon = <FaRocket className="text-red-500 text-2xl" />;
      progressColor = "#E74C3C"; // Red
      progressValue = 87;
      break;
    case "students":
      icon = <FaUserGraduate className="text-orange-500 text-2xl" />;
      progressColor = "#FF9800"; // Orange
      progressValue = 80;
      break;
    case "lessons":
      icon = <FaChalkboardTeacher className="text-blue-500 text-2xl" />;
      progressColor = "#2196F3"; // Blue
      progressValue = 80;
      break;
    case "ai":
      icon = <FaBrain className="text-purple-500 text-2xl" />;
      progressColor = "#9C27B0"; // Purple
      progressValue = 80;
      break;
    case "books":
      icon = <FaBookOpen className="text-pink-500 text-2xl" />;
      progressColor = "#F06292"; // Pink
      progressValue = 20;
      break;
    default:
      icon = null;
      progressColor = "#ddd";
      progressValue = 0;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-xl font-semibold">{value}</p>
          <p className="text-sm text-gray-500">{percentage}</p>
        </div>
      </div>

      {/* Circular Progress Bar */}
      <div className="relative w-12 h-12">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Background Circle */}
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="3"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
          {/* Progress Circle */}
          <circle
            className="stroke-current"
            strokeWidth="3"
            strokeDasharray="100, 100"
            strokeDashoffset={`${100 - progressValue}`}
            strokeLinecap="round"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
            style={{ stroke: progressColor, transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default StatsCard;