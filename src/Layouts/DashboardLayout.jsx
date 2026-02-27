import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      {/* Sidebar */}
      <aside className="fixed top-4 left-4 w-24 h-full bg-red-50 rounded-2xl p-4">
        hi
      </aside>

      {/* Body Content */}
      <section className="ml-32">
        {/* Navbar */}
        <nav className="sticky top-4 bg-red-50 rounded-2xl p-4 mb-4">nav</nav>
        {/* Main Content */}
        <div className="bg-red-50 rounded-2xl p-4 min-h-[80vh]">{children}</div>
      </section>
    </main>
  );
};

export default DashboardLayout;
