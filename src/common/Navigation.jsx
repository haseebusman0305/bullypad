import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Rotate90DegreesCwOutlinedIcon from '@mui/icons-material/Rotate90DegreesCwOutlined';
import SyncLockOutlinedIcon from '@mui/icons-material/SyncLockOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ControlPointDuplicateOutlinedIcon from '@mui/icons-material/ControlPointDuplicateOutlined';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';

const navLinks = {
  '/': [
    { path: '/', label: 'Dashboard', heading: 'General', icon: <DashboardIcon /> },
    { path: '/account', label: 'Account', disabled: true, heading: 'General', icon: <AccountCircleIcon /> },
    { path: '/eligibility', label: 'Eligibility', disabled: true, heading: 'General', icon: <CheckCircleIcon /> },
    { path: '/whitelisted', label: 'Whitelisted', disabled: true, heading: 'General', icon: <FormatListBulletedIcon /> },
  ],
  '/launches': [
    { path: '/token', label: 'Tokens', disabled: true, heading: 'Browser', icon: <TokenOutlinedIcon /> },
    { path: '/pairs', label: 'Pairs', disabled: true, heading: 'Browser', icon: <ControlPointDuplicateOutlinedIcon /> },
    { path: '/launches', label: 'Launch', heading: 'Browser', icon: <RocketLaunchOutlinedIcon /> },
  ],
  '/services': [
    { path: '/services/minter', label: 'Token Minter', heading: 'Services', icon: <Rotate90DegreesCwOutlinedIcon /> },
    { path: '/services/locker', label: 'Token Locker', disabled: true, heading: 'Services', icon: <SyncLockOutlinedIcon /> },
    { path: '/services/liquidity', label: 'Liquidity Locker', heading: 'Services', icon: <VpnKeyOutlinedIcon /> },
    { path: '/services/ilo', label: 'Create ILO', heading: 'Services', icon: <DashboardIcon /> },
  ],
  'default': [
    { path: '/', label: 'Dashboard', heading: 'General', icon: <DashboardIcon /> },
    { path: '/account', label: 'Account', disabled: true, heading: 'General', icon: <AccountCircleIcon /> },
    { path: '/eligibility', label: 'Eligibility', disabled: true, heading: 'General', icon: <CheckCircleIcon /> },
    { path: '/whitelisted', label: 'Whitelisted', disabled: true, heading: 'General', icon: <FormatListBulletedIcon /> },
  ],
};

const applyGradientFill = (icon, isActive) => {
  return React.cloneElement(icon, {
    sx: {
      fill: isActive ? 'url(#customGradient)' : '',
    },
  });
};

const Navigation = ({ isSidebarOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredLink, setHoveredLink] = useState(null);

  const pathStartsWith = (path, prefix) => path.startsWith(prefix);

  const links = pathStartsWith(currentPath, '/services') ? navLinks['/services'] : (navLinks[currentPath] || navLinks['default']);

  const groupedLinks = links.reduce((groups, link) => {
    if (!groups[link.heading]) {
      groups[link.heading] = [];
    }
    groups[link.heading].push(link);
    return groups;
  }, {});

  return (
    <div className={`sticky top-0 z-10 md:z-0 bg-[#121212] transition-all duration-300 ${isSidebarOpen ? 'w-72' : 'w-0'} bg-[#151414] border-r border-zinc-800 h-screen  py-8`}>
      <div className={`transition-opacity duration-200 mx-3 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
        {Object.keys(groupedLinks).map(heading => (
          <div key={heading}>
            <h1 className='my-10 mx-4 text-white font-bold text-xl'>
              {heading}
            </h1>
            <ul>
              {groupedLinks[heading].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={`inline-flex items-center px-2 text-white hover:bg-[#201f1f]  w-full py-3 my-1 rounded-md ${link.disabled ? 'opacity-50 cursor-default' : ''}`}
                    style={{ pointerEvents: link.disabled ? 'none' : 'auto' }}
                    onMouseEnter={() => setHoveredLink(link.path)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {applyGradientFill(link.icon, link.path === currentPath || link.path === hoveredLink)}
                    <span className='pl-2 text-sm font-bold'>
                      {link.label}
                      {link.disabled && (
                        <span className='text-xs opacity-50 pl-1'>
                          (COMING SOON)
                        </span>
                      )}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
