import React from "react";
import { NavLink } from "react-router";
import DownloadApps from "../components/DownloadApps";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { IoMdCopy, IoIosCopy } from "react-icons/io";
import {
  LuCalendarRange,
  LuUsers,
  LuSettings,
  LuBadgeHelp,
} from "react-icons/lu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { SiCircle, SiGoogleanalytics } from "react-icons/si";

const Sidebar = () => {
  const menusItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: MdOutlineDashboard,
      activeIcon: MdDashboard,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: IoMdCopy,
      activeIcon: IoIosCopy,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: LuCalendarRange,
      activeIcon: LuCalendarRange,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: SiGoogleanalytics,
      activeIcon: SiGoogleanalytics,
    },
    { name: "Team", path: "/team", icon: LuUsers, activeIcon: LuUsers },
  ];

  const generalItems = [
    { name: "Settings", path: "/settings", icon: LuSettings },
    { name: "Help", path: "/help", icon: LuBadgeHelp },
    { name: "Logout", path: "/logout", icon: RiLogoutCircleRLine },
  ];

  return (
    <div className="flex flex-col h-screen w-20 md:w-56 py-6">
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 1. logo */}
        <div className="mb-10 flex items-center justify-center md:justify-start gap-3 px-6">
          <SiCircle className="text-green-700 text-2xl" />
          <h1 className="text-2xl font-extrabold text-green-700 hidden md:block">
            Denozo
          </h1>
        </div>
        {/* 2. menus items */}
        <div className="flex-1 overflow-y-auto">
          <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-4 px-6 text-center md:text-left">
            MENU
          </p>

          <div className="flex flex-col">
            {menusItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="group relative flex items-center"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`absolute left-0 transition-all duration-300 ${isActive ? "h-8 w-1.5 bg-green-600 rounded-r-full" : "h-0 w-0"}`}
                    ></div>

                    <div
                      className={`flex items-center gap-3 w-full py-3 px-6 transition-all ${isActive ? "text-green-700 font-bold" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <div className="text-2xl shrink-0">
                        {isActive ? <item.activeIcon /> : <item.icon />}
                      </div>
                      <span className="hidden md:block text-[15px]">
                        {item.name}
                      </span>
                    </div>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* 3. general menus items */}
          <div className="mt-8">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-4 px-6 text-center md:text-left">
              GENERAL
            </p>
            <div className="flex flex-col">
              {generalItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="group relative flex items-center"
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`absolute left-0 transition-all duration-300 ${isActive ? "h-8 w-1.5 bg-green-600 rounded-r-full" : "h-0 w-0"}`}
                      ></div>
                      <div
                        className={`flex items-center gap-3 w-full py-3 px-6 transition-all ${isActive ? "text-green-700 font-bold" : "text-gray-400 hover:text-gray-600"}`}
                      >
                        <div className="text-2xl shrink-0">
                          <item.icon />
                        </div>
                        <span className="hidden md:block text-[15px]">
                          {item.name}
                        </span>
                      </div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block">
        <DownloadApps />
      </div> */}
    </div>
  );
};

export default Sidebar;
