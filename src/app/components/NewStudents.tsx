import React from 'react';

const NewStudents: React.FC = () => {
  const students: Student[] = [
    { name: 'Leandre Flicky', time: '2 days ago', spots: 'Available Spots: 224' },
    { name: 'John Doe', time: '1 day ago', spots: 'Available Spots: 200' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">New Students Who Want To Join</h2>
      {students.map((student, index) => (
        <div key={index} className="flex justify-between items-center border-b py-2">
          <div>
            <p>{student.name}</p>
            <p className="text-sm text-gray-500">{student.time}</p>
            <p className="text-sm text-gray-500">{student.spots}</p>
          </div>
          <div>
            <button className="btn-primary">Accept</button>
            <button className="btn-secondary ml-2">Decline</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewStudents;
