import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold">Welcome Erik Ten Hag</h1>
      <p>Pleased that you are back 😊</p>
      <div className="mt-4">
        <button className="btn-primary">Upload Curriculum</button>
        <button className="btn-primary ml-4">Analyze Curriculum</button>
      </div>
    </div>
  );
};

export default Header;
