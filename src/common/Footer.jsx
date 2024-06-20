import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col pt-4 sm:pt-8 mt-4 sm:mt-8 border-t border-zinc-900">
            <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start flex-wrap px-4 sm:px-8 lg:px-[5rem] py-6 sm:py-14 border-b border-zinc-900'>
                <Link to='/' className='mb-6 sm:mb-0'>
                    <img className='w-[2.29169rem] h-auto' src="/logo_bull.png" alt="Bullypad logo" />
                </Link>

                <div className='flex flex-col sm:flex-row gap-8 sm:gap-[3rem] lg:gap-[6rem] mt-4 sm:mt-0 sm:mr-6 lg:mr-24'>
                    <div className='flex flex-col gap-4 sm:gap-5 justify-start items-center sm:items-start'>
                        <Link to='#' className='text-sm font-bold'>Careers</Link>
                        <Link to='#' className='text-sm font-bold'>Apply for Launchpad</Link>
                        <Link to='#' className='text-sm font-bold'>Partnerships</Link>
                    </div>
                    <div className='flex flex-col gap-4 sm:gap-5 justify-start items-center sm:items-start'>
                        <Link to='#' className='text-sm font-bold'>Terms and Conditions</Link>
                        <Link to='#' className='text-sm font-bold'>Privacy Policy</Link>
                        <Link to='#' className='text-sm font-bold'>Documentation</Link>
                    </div>
                </div>
            </div>
            <p className="text-[#ADADAD] text-[0.875rem] px-4 sm:px-8 lg:px-[5rem] my-6 sm:my-10 text-center sm:text-left">Bullypad © 2024 • All rights reserved</p>
        </footer>
    );
}

export default Footer;