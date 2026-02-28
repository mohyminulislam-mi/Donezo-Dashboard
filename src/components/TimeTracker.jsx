import React, { useEffect, useRef, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaPauseCircle } from "react-icons/fa";
import { TbPlayerStopFilled } from "react-icons/tb";
import Reveal from "../components/common/Reveal";

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0",
    );
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Start / Pause Toggle
  const handleToggle = () => {
    setIsRunning((prev) => !prev);
  };

  // Reset
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <Reveal>
      <div className="bg-gradient-to-br from-[#076141] via-[#006442] to-[#023523] text-white p-11 rounded-3xl relative overflow-hidde">
        <p className="text-sm font-medium mb-4 tracking-wide">Time Tracker</p>

        <h2 className="text-4xl font-mono font-bold mb-6 text-center">
          {formatTime(seconds)}
        </h2>

        <div className="flex gap-4 justify-center">
          {/* Start / Pause */}
          <button
            onClick={handleToggle}
            className="bg-white text-green-900 p-3 rounded-full hover:scale-110 transition cursor-pointer"
          >
            {isRunning ? (
              <FaPauseCircle size={24} />
            ) : (
              <BsPlayCircleFill size={24} />
            )}
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="bg-red-500 text-white p-3 rounded-full hover:scale-110 transition cursor-pointer"
          >
            <TbPlayerStopFilled size={24} />
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default TimeTracker;
