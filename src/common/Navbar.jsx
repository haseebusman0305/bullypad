import React from 'react';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import { NavLink } from 'react-router-dom';
import NoteIcon from '@mui/icons-material/Note';

const Navbar = () => {
  return (
    <nav className="h-20 items-center flex px-6 my-3 py-2 justify-between">
      <section className='flex flex-row gap-6 items-start '>
        <NavLink to="https://x.com">
          <XIcon sx={{
            fontSize: 20,
          }} />
        </NavLink>
        <NavLink to="https://telegram.com">
          <TelegramIcon className='hover:text-blue-400 hover:transition hover:duration-200' sx={{
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
