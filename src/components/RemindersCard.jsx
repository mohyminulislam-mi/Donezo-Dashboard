import React from "react";
import { FiVideo } from "react-icons/fi";
import Reveal from "../components/common/Reveal";

const RemindersCard = () => {
  return (
    <Reveal>
      <div className="bg-white p-6 rounded-3xl flex flex-col justify-between">
        <div>
          <p className="font-bold text-sm mb-4">Reminders</p>
          <h2 className="text-2xl font-bold text-[#14532d] leading-tight mb-2">
            Meeting with Arc Company
          </h2>
          <p className="text-gray-400 text-sm">Time : 04.00 pm - 08.00 pm</p>
        </div>
        <button className="mt-6 flex items-center justify-center gap-2 bg-[#14532d] text-white w-full py-4 rounded-full font-bold shadow-md cursor-pointer hover:scale-101 transition-all">
          <FiVideo size={20} /> Start Meeting
        </button>
      </div>
    </Reveal>
  );
};

export default RemindersCard;
