import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TokenIcon from '@mui/icons-material/Token';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import '../App.css';
const HomePage = () => {
    return (
        <section className="flex flex-col py-8  px-8">
            <h1 className="px-1 py-7 font-bold text-4xl ">
                DASHBOARD
            </h1>
            <div className='flex flex-row gap-4'>
                <div className="flex flex-row gap-6 bg-[#141414]  min-h-[28rem] w-[65%] rounded-2xl p-6">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between items-center ">
                            <div className="flex flex-row justify-start items-center gap-2">
                                <img className="w-10 h-auto mx-2" src="logo_bull.png" alt="" />
                                <h2 className="text-md font-bold">
                                    BULLY
                                </h2>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <h2 className="text-lg">
                                    Buy BULLY on
                                </h2>
                                <button className="flex flex-row text-sm items-center gap-2 bg-[#272727] p-2 rounded-3xl ">
                                    <img className="w-6 h-auto" src="pancake.png" alt="pancake" />
                                    Raydium
                                </button>
                                <button className="flex flex-row text-sm items-center gap-2 bg-[#272727] p-2 !rounded-3xl ">
                                    <img className="w-7 h-auto" src="jupiter.png" alt="pancake" />
                                    Jupiter
                                </button>
                            </div>
                        </div>
                        <div className='w-[100%] mb-7'>
                            <img className='w-full h-auto ' src="/trading.png" alt="" />
                        </div>
                        <div className='flex flex-row justify-between px-3 '>

                            <button className="flex flex-row text-sm items-center gradientborder   gap-2 bg-[#272727] p-2 rounded-3xl ">
                                BULLY|0.0000234$
                            </button>

                            <span className='text-[1rem]'>
                                Charts by TradingView
                            </span>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-5  w-[33%] mt-0  '>
                    <button className='bg-[#141414] w-full  border-none flex flex-row items-start gap-4 pl-6     py-5 rounded-2xl'>
                        <RocketLaunchIcon sx={{fontSize:'1.8rem'}} />
                        <h1 className='text-lg font-bold'>
                            New Launches
                        </h1>
                    </button>
                    <button className='bg-[#141414] w-full  border-none flex flex-row items-start gap-4 pl-6     py-5 rounded-2xl'>
                        <TokenIcon sx={{fontSize:'1.8rem'}} />
                        <h1 className='text-lg font-bold'>
                        Token Minter
                        </h1>
                    </button>
                    <button className='bg-[#141414] w-full  border-none flex flex-row items-start gap-4 pl-6     py-5 rounded-2xl'>
                        <LockIcon sx={{fontSize:'1.8rem'}} />
                        <h1 className='text-lg font-bold'>
                        Token Locker 
                        <span className='text-[12px]'>
                          (Coming Soon)
                            </span>
                        </h1>
                    </button>
                    <button className='bg-[#141414] w-full  border-none flex flex-row items-start gap-4 pl-6     py-5 rounded-2xl'>
                        <VpnKeyIcon sx={{fontSize:'1.8rem'}} />
                        <h1 className='text-lg font-bold'>
                        Liquidity Locker
                        </h1>
                    </button>
                    <button className='bg-[#141414] w-full  border-none flex flex-row items-start gap-4 pl-6     py-5 rounded-2xl'>
                        <AddBoxOutlinedIcon sx={{fontSize:'1.8rem'}} />
                        <h1 className='text-lg font-bold'>
                        Create Launches
                        </h1>
                    </button>

                </div>
            </div>
        </section>
    );
}

export default HomePage;
