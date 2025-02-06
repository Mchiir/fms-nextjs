"use client";
import React, { useState, useEffect, useRef } from "react";
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

const ProfileGraphC: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const createGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(47, 128, 237, 0.5)"); // Blue at the top
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // White at the bottom
    return gradient;
  };

  const getChartData = () => {
    if (!chartRef.current) return null;
    const chart = chartRef.current;
    const ctx = chart.ctx;

    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Content",
          data: [10, 25, 30, 50, 45, 40],
          borderColor: "#2F80ED",
          backgroundColor: createGradient(ctx),
          fill: true, // Enables the gradient fill
          tension: 0.4, // Smooth curve
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hides the legend
    },
    scales: {
      x: { display: false }, // Hide X-axis labels
      y: { display: false }, // Hide Y-axis labels
    },
  };

  if (!isClient) return null;

  return (
    <div className="h-64">
      <Line ref={chartRef} data={getChartData() || { labels: [], datasets: [] }} options={options} />
    </div>
  );
};

export default ProfileGraphC;