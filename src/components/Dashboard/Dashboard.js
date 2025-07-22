import React from "react";
import StatsCards from "./StatsCards";
import ActiveAgentsTable from "./ActiveAgentsTable";

const Dashboard = () => {
  return (
    <div className="p-6 lg:p-8 lg:pr-16">
      <StatsCards />
      <ActiveAgentsTable />
    </div>
  );
};

export default Dashboard;
