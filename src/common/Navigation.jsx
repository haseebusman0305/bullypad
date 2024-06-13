import React from 'react';

const Navigation = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={` sticky top-0 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} bg-[#151414]   border-r border-zinc-600 h-screen`}>
    
      {isSidebarOpen && (
        <>
          <button 
        className="text-white p-2"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>        <ul className="text-white mt-4">
          <li className="p-2"><a href="/">Home</a></li>
          <li className="p-2"><a href="/about">About</a></li>
          <li className="p-2"><a href="/contact">Contact</a></li>
        </ul>
        </>

      )}
    </div>
  );
};

export default Navigation;
