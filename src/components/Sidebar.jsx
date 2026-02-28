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
import useAuth from "../hooks/useAuth";

const Sidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();

  const menusItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: MdOutlineDashboard,
      activeIcon: MdDashboard,
    },
    { name: "Tasks", path: "/tasks", icon: IoMdCopy, activeIcon: IoIosCopy },
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
  ];

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}
      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-gray-100 z-50 transform transition-transform duration-300 rounded-r-2xl md:rounded-none
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 w-68 shadow-md md:shadow-none`}
      >
        <div className="flex flex-col h-full py-6">
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3 px-6">
              <SiCircle className="text-green-700 text-2xl" />
              <h1 className="text-2xl font-extrabold text-green-700">Denozo</h1>
            </div>

            {/* Menus */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-xs font-bold text-gray-400 tracking-widest mb-2 px-6">
                MENU
              </p>
              <div className="flex flex-col">
                {menusItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={onClose}
                    className="group relative flex items-center"
                  >
                    {({ isActive }) => (
                      <>
                        <div
                          className={`absolute left-0 transition-all duration-300 ${isActive ? "h-8 w-1.5 bg-green-600 rounded-r-full" : "h-0 w-0"}`}
                        ></div>
                        <div
                          className={`flex items-center gap-3 w-full py-2 px-6 transition-all ${isActive ? "text-green-700 font-bold" : "text-gray-400 hover:text-gray-600"}`}
                        >
                          <div className="text-2xl shrink-0">
                            {isActive ? <item.activeIcon /> : <item.icon />}
                          </div>
                          <span className="text-sm">{item.name}</span>
                        </div>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
              {/* General menus */}
              <div className="mt-5">
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-2 px-6">
                  GENERAL
                </p>
                <div className="flex flex-col">
                  {generalItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={onClose}
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
                            <span className="text-sm">{item.name}</span>
                          </div>
                        </>
                      )}
                    </NavLink>
                  ))}
                  <button
                    onClick={() => {
                      logout();
                      onClose();
                    }}
                    className="flex items-center gap-3 mt-3 px-6 text-red-500 cursor-pointer"
                  >
                    <RiLogoutCircleRLine className="text-2xl shrink-0" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <DownloadApps />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
