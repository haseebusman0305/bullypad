import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';

const Sidebar = ({ toggleSidebar }) => {
  const location = useLocation();

  const getNavLinkClass = ({ path }) => {
    const isActive = location.pathname === path || location.pathname.startsWith(path + '/');
    const baseClass = 'px-2 py-4 rounded-md mb-2';
    const activeClass = isActive ? baseClass : `text-white ${baseClass} hover:bg-zinc-700 transition-colors duration-300`;
    return activeClass;
  };

  const iconStyle = (path) => ({
    fontSize: "40px",
    fill: location.pathname === path || location.pathname.startsWith(path + '/') ? "url(#customGradient)" : "white",
    '&:hover': {
      fill: "url(#customGradient)",
    },
  });

  return (
    <div className="w-20 sticky top-0 bg-[#121212] h-screen flex flex-col items-center border-r border-zinc-800">
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
      <div>
        <button className="text-white p-2 mt-2" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      </div>
      <NavLink to="/">
        <img className='w-10 mb-10 mt-3' src="logo_bull.png" alt="Logo" />
      </NavLink>

      <ul className="text-white">
        <li className="p-2  my-4">
          <NavLink to="/" className={getNavLinkClass({ path: "/" })}>
            <KeyboardCommandKeyOutlinedIcon sx={iconStyle("/")} />
          </NavLink>
        </li>
        <li className="p-2 my-4">
          <NavLink to="/launches" className={getNavLinkClass({ path: "/launches" })}>
            <WidgetsOutlinedIcon sx={iconStyle("/launches")} />
          </NavLink>
        </li>
        <li className="p-2 py-4">
          <NavLink to="/services" className={getNavLinkClass({ path: "/services" })}>
            <SettingsOutlinedIcon sx={iconStyle("/services")} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;