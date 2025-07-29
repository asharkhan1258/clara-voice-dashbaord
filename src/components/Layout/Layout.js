import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen" style={{ background: 'linear-gradient(135deg, var(--apple-gray-50) 0%, #ffffff 100%)' }}>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto relative" style={{ background: 'linear-gradient(135deg, var(--apple-gray-50) 0%, #ffffff 100%)' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
