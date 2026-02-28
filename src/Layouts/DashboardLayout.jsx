import React, { useState } from "react";

import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router";

import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white relative flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <section className="flex-1 p-4  transition-all duration-300">
        <div className="sticky top-4 z-30 bg-gray-100 rounded-2xl p-4 shadow-sm">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        </div>
        <div className="bg-gray-100 rounded-2xl p-4 min-h-[80vh] mt-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
