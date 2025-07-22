import React from "react";
import { dashboardStats } from "../../data/mockData";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {dashboardStats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-3">
              {stat.value}
            </div>
            <div className="text-xl font-medium text-gray-600 leading-5">
              {stat.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
