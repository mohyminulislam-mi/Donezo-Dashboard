import React from "react";
import DashboardStatusCard from "../components/DashboardStatusCard";
import Analytics from "../components/Analytics";
import RemindersCard from "../components/RemindersCard";
import ProjectsCard from "../components/ProjectsCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardStatusCard />
      <div className="grid grid-cols-12 gap-6">
        {/* Row 1 */}
        <div className="col-span-12 lg:col-span-6  rounded-2xl">
          <Analytics />
        </div>
        <div className="col-span-12 lg:col-span-3  rounded-2xl">
          <RemindersCard />
        </div>

        {/* Projects */}
        <div className="col-span-12 lg:col-span-3 row-span-2 rounded-2xl">
          <ProjectsCard />
        </div>

        {/* Row 2 */}
        <div className="col-span-12 lg:col-span-4 row-span-2 bg-red-400 rounded-2xl">
          Team
        </div>

        <div className="col-span-12 lg:col-span-4 row-span-2 bg-red-400 rounded-2xl">
          Progress
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
