"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Graph = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set the state to true once client-side render is done
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Content",
        data: [10, 25, 30, 50, 45, 40],
        borderColor: "#2F80ED", 
        backgroundColor: "#2F80ED",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Content",
        data: [-20, -15, -10, -5, -10, -15],
        borderColor: "#BB6BD9", 
        backgroundColor: "#BB6BD9",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  if (!isClient) return null; // Don't render until after the client-side hydrate

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-bold mb-2">Overall Work Rate</h2>
      <p className="text-blue-500 text-3xl font-bold">5.000,00</p>
      <p className="text-gray-500 text-sm">50 Orders</p>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
