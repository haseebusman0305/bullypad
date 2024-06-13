import React from 'react';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="bg-customGray text-white p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-white">
        {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <div>
       
        <span className="ml-4">Home</span>
        <span className="ml-4">Profile</span>
        <span className="ml-4">Settings</span>
      </div>
    </div>
  );
};

export default Navbar;
