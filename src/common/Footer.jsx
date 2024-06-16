import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col pt-8 mt-8 border-t  border-zinc-900 ">
            <div className='flex flex-row justify-between flex-wrap px-[5rem] py-14 border-b  border-zinc-900 '>
                <Link to='/'>
                    <img className='w-[2.29169rem] h-auto ' src="/logo_bull.png" alt="" />
                </Link>

                <div className='flex flex-row gap-[6rem] mr-24'>
                    <div className='flex flex-col gap-5 justify-start '>
                        <Link  to='#' className='text-sm font-bold'>
                            Careers</Link>
                        <Link  to='#' className='text-sm font-bold'>
                            Apply for Launchpad</Link>
                        <Link  to='#' className='text-sm font-bold'>
                            Partnerships</Link>

                    </div>
                    <div className='flex flex-col gap-5 justify-start '>
                        <Link  to='#' className='text-sm font-bold'>
                            Terms and Conditions</Link>
                        <Link  to='#' className='text-sm font-bold'>
                            Privacy Policy</Link>
                        <Link  to='#' className='text-sm font-bold'>
                            Documentation</Link></div>
                </div>
            </div>
            <p className="text-[#ADADAD] text-[0.875rem] ml-[5rem] my-10">Bullypad © 2024 • All rights reserved</p>
        </footer>
    );
}

export default Footer;

