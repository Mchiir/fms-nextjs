import React from 'react';

interface Event {
  title: string;
  date: string;
  time: string;
}

const Schedule: React.FC = () => {
  const events: Event[] = [
    { title: 'Meeting With Staff', date: '13 August 2024', time: '2:30 pm' },
    { title: 'Assessment', date: '14 August 2024', time: '2:30 pm' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">Schedule</h2>
      {events.map((event, index) => (
        <div key={index} className="flex justify-between border-b py-2">
          <div>
            <p>{event.title}</p>
            <p className="text-sm text-gray-500">{event.date} - {event.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
