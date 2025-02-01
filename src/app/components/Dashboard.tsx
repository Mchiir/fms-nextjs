import React from 'react';
import Header from './Header';
import PerformanceMetrics from './PerformanceMetrics';
import WorkRateChart from './WorkRateChart';
import NewStudents from './NewStudents';
import Schedule from './Schedule';
import Calendar from './Calendar';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PerformanceMetrics />
        <Calendar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
        <WorkRateChart />
        <NewStudents />
        <Schedule />
      </div>
    </div>
  );
};

export default Dashboard;
