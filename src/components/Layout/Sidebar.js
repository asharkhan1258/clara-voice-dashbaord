import React from "react";
import { navigationItems } from "../../data/mockData";

const iconMap = {
  home: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  ),
  refresh: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clipRule="evenodd"
      />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
        clipRule="evenodd"
      />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    </svg>
  ),
  cog: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
        fixed inset-y-0 left-0 z-30 w-80 transform transition-all duration-300 ease-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
        style={{ 
          background: 'linear-gradient(180deg, #1a1d24 0%, #0d1117 100%)'
        }}
      >
        {/* Header Section */}
        <div className="relative">
          <div className="absolute inset-0 apple-glass" style={{ 
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }} />
          <div className="relative flex items-center justify-center h-[85px] px-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center shadow-lg" 
                   style={{ 
                     background: 'linear-gradient(135deg, var(--apple-blue-500) 0%, var(--apple-blue-600) 100%)',
                     boxShadow: '0 8px 20px rgba(0, 122, 255, 0.3)'
                   }}>
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                <span className="text-2xl font-semibold tracking-tight text-white">
                  Clara Voice
                </span>
                {/* <div className="text-sm font-medium" style={{ color: 'var(--apple-gray-400)' }}>
                  Voice Dashboard
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="mt-6 px-6 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider mb-4 px-4" 
               style={{ color: 'var(--apple-gray-400)' }}>
            Navigation
          </div>
          
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => console.log(`Navigate to ${item.name}`)}
              className={`
                group relative flex items-center w-full text-left rounded-2xl
                transition-all duration-300 ease-out transform
                ${item.active 
                  ? "text-white scale-[1.02]" 
                  : "text-gray-300 hover:text-white hover:scale-[1.01]"
                }
              `}
              style={{
                background: item.active 
                  ? 'linear-gradient(135deg, rgba(0, 122, 255, 0.8) 0%, rgba(0, 86, 214, 0.9) 100%)'
                  : 'transparent'
              }}
            >
              {/* Background blur effect for active item */}
              {item.active && (
                <div className="absolute inset-0 rounded-2xl backdrop-blur-xl" 
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                       border: '1px solid rgba(255, 255, 255, 0.15)'
                     }} />
              )}
              
              {/* Hover background for non-active items */}
              {!item.active && (
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ background: 'rgba(255, 255, 255, 0.05)' }} />
              )}

              <div className="relative flex items-center px-5 py-4 w-full">
                {/* Icon container */}
                <div className={`
                  w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300
                  ${item.active 
                    ? "bg-white/20 shadow-lg" 
                    : "bg-white/5 group-hover:bg-white/10"
                  }
                `}>
                  {iconMap[item.icon]}
                </div>

                {/* Text */}
                <span className="text-lg font-medium tracking-tight">
                  {item.name}
                </span>

                {/* Active indicator */}
                {item.active && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-white shadow-lg" />
                )}
              </div>
            </button>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="rounded-2xl p-4" 
               style={{ 
                 background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                 border: '1px solid rgba(255, 255, 255, 0.1)'
               }}>
            <div className="text-sm font-medium text-white mb-1">System Status</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-lg"></div>
              <span className="text-sm" style={{ color: 'var(--apple-gray-400)' }}>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
