import React from "react";
import StatsCards from "./StatsCards";
import ActiveAgentsTable from "./ActiveAgentsTable";

const Dashboard = () => {
  return (
    <div className="p-8 lg:p-10 lg:pr-20 max-w-7xl mx-auto">
      <StatsCards />
      <ActiveAgentsTable />
    </div>
  );
};

export default Dashboard;
