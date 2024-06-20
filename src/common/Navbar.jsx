import React, { useState } from 'react';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import { NavLink } from 'react-router-dom';
import NoteIcon from '@mui/icons-material/Note';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-auto sm:h-20 items-center flex flex-col sm:flex-row px-4 sm:px-6 my-3 py-2 justify-between">
      <section className='flex flex-row gap-4 sm:gap-6 items-start mb-4 sm:mb-0'>
        <NavLink to="https://x.com">
          <XIcon sx={{ fontSize: 18, sm: { fontSize: 20 } }} />
        </NavLink>
        <NavLink to="https://telegram.com">
          <TelegramIcon className='hover:text-blue-400 hover:transition hover:duration-200' sx={{ fontSize: 18, sm: { fontSize: 20 } }} />
        </NavLink>
        <NavLink to="https://bullypad.gitbook.io/">
          <NoteIcon sx={{ fontSize: 18, sm: { fontSize: 20 } }} />
        </NavLink>
      </section>
      
      <button 
        className="sm:hidden mb-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon />
      </button>

      <section className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center gap-2`}>
        <button formTarget='_blanck' className="w-full sm:w-auto h-12 sm:h-16 rounded-lg bg-[#141414] flex p-2 sm:p-3 justify-center items-center gap-2 active:bg-[#0f0f0f] transition duration-150 ease-in-out mb-2 sm:mb-0">
          <img className='w-4 sm:w-5 h-auto flex-shrink-0' src="/solana.png" alt="" />
          <span className="text-sm sm:text-base font-bold font-large leading-6">
            SOL
          </span>
        </button>
        <div className="w-full sm:w-auto h-12 sm:h-16 rounded-lg bg-[#141414] flex p-2 sm:p-3 px-3 sm:px-4 justify-center items-center gap-2 active:bg-[#0f0f0f] transition duration-150 ease-in-out">
          <span className="bg-custom-gradient text-fill-transparent bg-clip-text text-sm sm:text-base font-bold font-large leading-6">
            0 SOL
          </span>
          <button className="px-4 sm:px-6 h-8 sm:h-10 rounded-lg bg-[#141414] flex p-2 sm:p-3 justify-center items-center gap-2 sm:gap-3 hover:bg-slate-800">
            <img className='w-5 sm:w-6 h-auto flex-shrink-0 rounded' src="/phantom_logo.png" alt="" />
            <span className="text-sm sm:text-base font-large font-bold leading-6">
              Connect
            </span>
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;