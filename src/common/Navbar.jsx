import React from 'react';
import GradientIcon from './Gradient.jsx'
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import { NavLink } from 'react-router-dom';

import GamesIcon from '@mui/icons-material/Games';
import NoteIcon from '@mui/icons-material/Note';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    // <div className="bg-customGray text-white p-4 flex justify-between items-center">
    //   <button onClick={toggleSidebar} className="text-white">
    //     {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
    //   </button>
    //   <div>
    // <GradientIcon icon={GamesIcon} size={32} />
    <nav className="h-20 items-center flex px-6 my-3 py-2 justify-between">
      <section className='flex flex-row gap-6 items-start '>
        <NavLink to="https://x.com">
          <XIcon sx={{
            fontSize: 20,
          }} />
        </NavLink>
        <NavLink to="https://telegram.com">
          <TelegramIcon sx={{
            fontSize: 20,
          }} /></NavLink>
        <NavLink to="https://bullypad.gitbook.io/">
          <NoteIcon sx={{
            fontSize: 20,
          }} /></NavLink>
      </section>
      <section className="items-center flex gap-2">
        <button formTarget='_blanck' className="h-16 rounded-lg bg-[#141414] flex p-3 justify-center items-center gap-2 active:bg-[#0f0f0f] transition duration-150 ease-in-out">
          <img className='w-5 h-auto flex-shrink-0' src="solana.png" alt="" />
          <span className="text-base font-bold font-large leading-6">
            SOL
          </span>
        </button>
        <div className="h-16 rounded-lg bg-[#141414] flex p-3  px-4 justify-center items-center gap-2 active:bg-[#0f0f0f] transition duration-150 ease-in-out">
          <span className="bg-custom-gradient text-fill-transparent bg-clip-text text-base font-bold font-large leading-6">
            0 SOL
          </span>
          <button className=" px-6 h-10 rounded-lg bg-[#141414] flex p-3 justify-center items-center gap-3  hover:bg-slate-800 ">
            <img className='w-6 h-auto flex-shrink-0 rounded' src="phantom_logo.png" alt="" />
            <span className="text-base font-large font-bold  leading-6">
              Connect
            </span>
          </button>
        </div>

      </section>
    </nav>


  );
};

export default Navbar;
