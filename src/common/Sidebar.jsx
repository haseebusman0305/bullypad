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
    fontSize: "37px",
    fill: location.pathname === path || location.pathname.startsWith(path + '/') ? "url(#customGradient)" : "#999999",
    '&:hover': {
      fill: "url(#customGradient)",
    },
  });

  return (
    <div className="md:w-20 w-14 sticky top-0 bg-[#121212] h-screen flex flex-col items-center border-r border-zinc-800">
      <div>
        <button className="text-white p-2 mt-2" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      </div>
      <NavLink to="/">
        <img className='w-10 mb-10 mt-3' src="/logo_bull.png" alt="Logo" />
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