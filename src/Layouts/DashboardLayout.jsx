import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <main className="min-h-screen bg-white p-4">
      {/* Sidebar */}
      <aside className="fixed top-4 left-4 w-20 md:w-56 h-full bg-gray-100 rounded-2xl">
        <Sidebar />
      </aside>

      {/* Body Content */}
      <section className="ml-26 md:ml-64">
        {/* Navbar */}
        <nav className="sticky top-4 bg-gray-100 rounded-2xl p-4">
          {" "}
          <Navbar />
        </nav>
        {/* Main Content */}
        <div className="bg-gray-100 rounded-2xl p-4 min-h-[80vh] mt-4 md:mt-8">
          <Outlet></Outlet>{" "}
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
