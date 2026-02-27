import React from "react";
import {
  MdKeyboardCommandKey,
  MdMailOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between ">
      <div className="flex items-center gap-4 flex-1">
        {/* ssearch bar */}
        <div className="relative items-center w-full max-w-100 hidden md:flex">
          <MdOutlineSearch
            className="absolute left-5 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search Task"
            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-14 pr-16 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#006442] shadow-sm text-gray-600 placeholder:text-gray-400"
          />
          <div className="absolute right-4 flex items-center gap-1 bg-gray-200 border border-gray-100 px-2 py-1 rounded-lg text-gray-400 text-[11px] font-bold">
            <MdKeyboardCommandKey size={10} className="text-black" />
            <span className="text-black">F</span>
          </div>
        </div>{" "}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-[#006442] transition-colors shadow-sm">
            <MdMailOutline size={20} />
          </button>
          <button className="w-11 h-11 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-[#006442] transition-colors shadow-sm relative">
            <BsBell size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-100">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="https://i.ibb.co.com/hxfh76FJ/users.png"
              alt="User"
              className="w-full h-full object-cover bg-[#FFE4D6]"
            />
          </div>
          <div className="md:flex flex-col hidden">
            <span className="text-[15px] font-bold text-gray-800">
              Charlie Wilson
            </span>
            <span className="text-[12px] text-gray-400 font-medium tracking-tight overflow-hidden text-ellipsis whitespace-nowrap max-w-37.5">
              charlie@example.com
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
