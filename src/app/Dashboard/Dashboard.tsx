import React from 'react';
import Header from './components/Header';
import PerformanceMetrics from './components/PerformanceMetrics';
import WorkRateChart from './components/WorkRateChart';
import NewStudents from './components/NewStudents';
import Schedule from './components/Schedule';
import Calendar from './components/Calendar';

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
