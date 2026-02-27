import React from "react";
import { FaDownload } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";

const DownloadApps = () => {
  return (
    <div className="mx-6 p-6 bg-[#0A0D0B] rounded-2xl relative group">
      <div className="relative z-10 flex flex-col items-start">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/10">
          <PiMedalLight size={16} className="text-white" />
        </div>
        <h4 className="text-white font-bold text-[17px] mb-1 leading-tight text-pretty">
          Download our Mobile App
        </h4>
        <p className="text-gray-400 text-[12px] mb-6">
          Get easy in another way
        </p>
        <FaDownload variant="primary" text="Download" className="w-full px-2" />
      </div>
    </div>
  );
};

export default DownloadApps;
