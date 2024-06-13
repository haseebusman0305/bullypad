// src/common/PermanentSidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-16 sticky top-0   bg-[#151414] h-screen flex flex-col items-center  border-r border-zinc-600">
      <ul className="text-white mt-4">
        <li className="p-2"><a href="/">Home</a></li>
        <li className="p-2"><a href="/about">About</a></li>
        <li className="p-2"><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
