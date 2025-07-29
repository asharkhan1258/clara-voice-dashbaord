import React, { useState } from "react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="apple-glass border-b relative z-40" style={{ borderColor: 'var(--apple-gray-200)' }}>
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden p-3 rounded-2xl transition-all duration-200 ease-out hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ color: 'var(--apple-gray-600)' }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="ml-6 lg:ml-0">
            <h1 className="text-3xl font-semibold tracking-tight" style={{ color: 'var(--apple-gray-900)' }}>
              Dashboard{" "}
              <span className="font-normal" style={{ color: 'var(--apple-gray-500)' }}>(Home)</span>
            </h1>
          </div>
        </div>

        <div className="relative z-50">
          <button
            type="button"
            className="flex items-center text-lg font-medium rounded-2xl px-4 py-3 transition-all duration-200 ease-out hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ color: 'var(--apple-gray-900)' }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Admin</span>
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div 
              className="absolute right-0 mt-3 w-52 bg-white rounded-2xl py-2 z-[100] animate-in fade-in duration-200 border" 
              style={{ 
                boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15), 0 8px 10px rgba(0, 0, 0, 0.06)',
                borderColor: 'var(--apple-gray-200)'
              }}
            >
              <button className="block w-full text-left px-5 py-3 text-base font-medium rounded-xl mx-2 transition-all duration-150 ease-out hover:bg-gray-50" style={{ color: 'var(--apple-gray-700)' }}>
                Profile
              </button>
              <button className="block w-full text-left px-5 py-3 text-base font-medium rounded-xl mx-2 transition-all duration-150 ease-out hover:bg-gray-50" style={{ color: 'var(--apple-gray-700)' }}>
                Settings
              </button>
              <button className="block w-full text-left px-5 py-3 text-base font-medium rounded-xl mx-2 transition-all duration-150 ease-out hover:bg-gray-50" style={{ color: 'var(--apple-gray-700)' }}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
