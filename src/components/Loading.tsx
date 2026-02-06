import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="page-loading">
      <div className="flex flex-col items-center gap-4">
        <div className="spinner"></div>
        <p className="text-[#1B4765] font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
