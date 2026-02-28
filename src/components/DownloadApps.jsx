import React from "react";
import { FaDownload } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
import Reveal from "../components/common/Reveal";

const DownloadApps = () => {
  return (
    <Reveal>
      <div className="mx-6 p-4 bg-[#023523] text-white rounded-3xl relative group">
        <div className="relative z-10 flex flex-col items-start">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/10">
            <PiMedalLight size={16} className="text-white" />
          </div>
          <h4 className="text-white font-bold text-medium mb-1 ">
            Download our Mobile App
          </h4>
          <p className="text-gray-400 text-xs mb-6">Get easy in another way</p>
          <button className=" flex items-center justify-center gap-2 bg-[#14532d] text-white w-full py-4 rounded-full font-bold shadow-md cursor-pointer hover:scale-101 transition-all">
            Download
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default DownloadApps;
