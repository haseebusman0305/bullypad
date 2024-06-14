import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navigation = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sticky top-0 bg-[#0f0f0f] transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-0'} bg-[#151414] border-r border-zinc-800 h-screen`}>
      {isSidebarOpen && (
        <>
          <button 
            className="text-white p-2"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close' : 'Open'}
          </button>
          <ul className="text-white mt-4">
            <li className="p-2"><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
            <li className="p-2"><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
            <li className="p-2"><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navigation;