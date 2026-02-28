import React from "react";
import DashboardStatusCard from "../components/DashboardStatusCard";
import Analytics from "../components/Analytics";
import RemindersCard from "../components/RemindersCard";
import ProjectsCard from "../components/ProjectsCard";
import TeamCollaboration from "../components/TeamCollaboration";
import ProjectProgress from "../components/ProjectProgress";
import TimeTracker from "../components/TimeTracker";

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

          <div className="mt-8">
            <TimeTracker />
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 lg:col-span-5 row-span-2 rounded-2xl">
          <TeamCollaboration />
        </div>

        <div className="col-span-12 lg:col-span-4 row-span-2 rounded-2xl">
          <ProjectProgress />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
