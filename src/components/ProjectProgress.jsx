import React from "react";

const ProjectProgress = () => {
  const percentage = 41;
  const radius = 80;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="lg:col-span-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
      <h3 className="font-bold w-full text-left mb-4">Products Progress</h3>

      <div className="relative mt-4">
        <svg width="200" height="120">
          {/* background */}
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="25"
            strokeLinecap="round"
          />

          {/* progress */}
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="#14532d"
            strokeWidth="25"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
          <h2 className="text-4xl font-bold">{percentage}%</h2>
          <p className="text-[10px] text-gray-400">Project delivery</p>
        </div>
      </div>

      <div className="flex gap-4 mt-8 text-[10px] font-bold">
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          Completed
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-900"></div>
          In Progress
        </span>
      </div>
    </div>
  );
};

export default ProjectProgress;
