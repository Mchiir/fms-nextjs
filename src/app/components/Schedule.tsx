import React from "react";
import { FaGraduationCap, FaBuilding, FaTrophy } from "react-icons/fa";

const Schedule = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {/* New Students Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">New Students Who Want To Join</h2>
        <p className="text-sm text-gray-500 mb-2">Available Spots: <span className="text-blue-500">224</span></p>
        <div className="space-y-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              <div className="flex items-center space-x-3">
                <img
                  src="./pics/flicky(1).png"
                  alt="Student"
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <p className="font-medium">Leandre Flicky</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
              <div className="space-x-2">
                <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md">Decline</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Accept</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Info Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">More Info</h2>
        <div className="space-y-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-md">
            <FaGraduationCap className="text-orange-500 text-xl" />
            <div className="ml-3">
              <p className="font-medium">300</p>
              <p className="text-sm text-gray-500">New Students This Year</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-3 rounded-md">
            <FaBuilding className="text-green-500 text-xl" />
            <div className="ml-3">
              <p className="font-medium">6</p>
              <p className="text-sm text-gray-500">Courses Completed</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-3 rounded-md">
            <FaTrophy className="text-blue-500 text-xl" />
            <div className="ml-3">
              <p className="font-medium">25</p>
              <p className="text-sm text-gray-500">Competitions Won</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2 flex justify-between">Schedule <span className="text-blue-500 text-sm cursor-pointer">View All</span></h2>
        <div className="space-y-4">
          {["Meeting With Staff", "Assessment", "Meeting With Staff"].map((event, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-3 rounded-md">
              <img
                src="https://via.placeholder.com/40"
                alt="Event"
                className="rounded-full w-10 h-10"
              />
              <div className="ml-3">
                <p className="font-medium">{event}</p>
                <p className="text-sm text-gray-500">13 August 2024 - 2:30 pm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
