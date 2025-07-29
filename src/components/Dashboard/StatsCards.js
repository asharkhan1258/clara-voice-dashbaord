import React from "react";
import { dashboardStats } from "../../data/mockData";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {dashboardStats.map((stat) => (
        <div
          key={stat.id}
          className="apple-card apple-hover-lift p-8 rounded-3xl cursor-pointer transition-all duration-200 ease-out"
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-4 tracking-tight" style={{ color: 'var(--apple-gray-900)' }}>
              {stat.value}
            </div>
            <div className="text-lg font-medium leading-6" style={{ color: 'var(--apple-gray-600)' }}>
              {stat.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
