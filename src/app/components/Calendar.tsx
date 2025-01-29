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
    </div>
  );
};

export default Calendar;
