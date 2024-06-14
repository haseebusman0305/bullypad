import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import GamesIcon from '@mui/icons-material/Games';

const Sidebar = () => {
  const location = useLocation();

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? ' px-2 py-4 rounded-md mb-2'
      : 'text-white px-2 py-4 rounded-md hover:bg-zinc-700 transition-colors duration-300 mb-2';

  const iconStyle = (path) => ({
    fontSize: "40px",
    fill: location.pathname === path ? "url(#customGradient)" : "white",
  });

  return (
    <div className="w-20 sticky top-0 bg-[#0f0f0f] h-screen flex flex-col items-center border-r border-zinc-800">
      <svg width="0" height="0">
        <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d16ba5" />
          <stop offset="16.67%" stopColor="#ba83ca" />
          <stop offset="33.33%" stopColor="#9a9ae1" />
          <stop offset="50%" stopColor="#69bff8" />
          <stop offset="66.67%" stopColor="#52cffe" />
          <stop offset="100%" stopColor="#5ffbf1" />
        </linearGradient>
      </svg>

      <NavLink to="/">
        <img className='w-10 my-10' src="logo_bull.png" alt="Logo" />
      </NavLink>

      <ul className="text-white">
        <li className="p-2 my-4">
          <NavLink to="/" className={getNavLinkClass({ isActive: location.pathname === "/" })}>
            <GamesIcon sx={iconStyle("/")} />
          </NavLink>
        </li>
        <li className="p-2 my-4">
          <NavLink to="/about" className={getNavLinkClass({ isActive: location.pathname === "/about" })}>
            <GridViewIcon sx={iconStyle("/about")} />
          </NavLink>
        </li>
        <li className="p-2 my-4">
          <NavLink to="/contact" className={getNavLinkClass({ isActive: location.pathname === "/contact" })}>
            <SettingsIcon sx={iconStyle("/contact")} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;