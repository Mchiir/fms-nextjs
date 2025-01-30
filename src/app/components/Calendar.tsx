<<<<<<< HEAD
import React from 'react';

const Calendar: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">Calendar</h2>
      <p className="mt-4">[Calendar component can be implemented here]</p>
=======
"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Calendar</h2>
        <a href="#" className="text-blue-500 text-sm">View All &gt;</a>
      </div>
      <p className="text-gray-500 mb-2">Sep 2022</p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="rounded-lg border border-gray-200 p-2" />
      </LocalizationProvider>
>>>>>>> 79dafc6b9de6b28d22a5b9e6a392e5209eae7a3e
    </div>
  );
};

export default Calendar;
