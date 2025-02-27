"use client"; // Add this line to make it a client component

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale // Import the CategoryScale
} from 'chart.js';

// Register Chart.js components, including CategoryScale
ChartJS.register(Tooltip, Legend, LinearScale, PointElement, LineElement, CategoryScale);

const WorkRateChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Content 1',
        data: [20, 10, 30, 50, 20, 60],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Content 2',
        data: [30, 20, 40, 70, 30, 80],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">Overall Work Rate</h2>
      <Line data={data} />
      <p className="mt-2">Overall Work Rate: 5,000.00</p>
      <p>50 Orders</p>
    </div>
  );
};

export default WorkRateChart;
