import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { TbPlayerStopFilled } from "react-icons/tb";

const TimeTracker = () => {
  return (
    <div className="bg-gradient-to-br from-[#14532d] to-[#22c55e] p-14 rounded-3xl text-white relative overflow-hidden">
      <p className="text-sm font-medium mb-4 ">Time Tracker</p>
      <h2 className="text-4xl font-mono font-bold mb-6">01:23:01</h2>
      <div className="flex gap-3 text-center justify-center">
        <button className="bg-white text-green-900 p-2 rounded-full">
          <BsPlayCircleFill size={24} />
        </button>
        <button className="bg-red-500 text-white p-2 rounded-full">
          <TbPlayerStopFilled size={24} />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
