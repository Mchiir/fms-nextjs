import React from "react";
import Graph from "./Graph";
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import SearchBar from "./SearchBar";
import StatsCard from "./StatsCard";
import { FaUpload, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4 mt-0">
        <h1 className="text-2xl font-bold">General Dashboard</h1>
        <SearchBar />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-10 mb-6">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
          <FaUpload className="ml-2" /> Upload Curriculum
        </button>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
          <FaChartLine className="ml-2" /> Analyze Curriculum
        </button>
      </div>

      {/* Stats Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatsCard
            title="Overall Performance"
            value="85%"
            percentage="Consistent Growth" type={"performance"}          />
          <StatsCard title="Declines" value="5%" percentage="Needs Attention" type={"performance"} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatsCard title="Students" value="2.6k" percentage="80% Increase" type={"performance"} />
          <StatsCard title="Lessons" value="40" percentage="80% Completed" type={"performance"} />
          <StatsCard title="AI Score" value="20" percentage="80% Increase" type={"performance"} />
          <StatsCard
            title="Books Used"
            value="23.6k"
            percentage="20% Available" type={"performance"}          />
        </div>
      </div>

      {/* Graph & Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <Graph />
        </div>
        <div className="col-span-1">
          <Calendar />
        </div>
      </div>

      <Schedule />
    </div>
  );
};

export default Dashboard;
