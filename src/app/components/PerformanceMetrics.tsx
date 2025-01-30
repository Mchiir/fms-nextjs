import React from 'react';

interface Metric {
  title: string;
  value: string;
  description: string;
}

const PerformanceMetrics: React.FC = () => {
  const metrics: Metric[] = [
    { title: 'Overall Performance', value: '8.7%', description: 'Of The Profit' },
    { title: 'Declines', value: '8.7%', description: 'Of The Profit' },
    { title: 'Students', value: '2.6k', description: '80% Increase' },
    { title: 'Lessons', value: '40', description: '80% Completed' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <h2 className="text-xl font-semibold">{metric.title}</h2>
          <p className="text-2xl font-bold">{metric.value}</p>
          <p>{metric.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
