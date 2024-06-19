import React, { useState } from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function Liquidity() {
    const [activeButton, setActiveButton] = useState('newLock');
    return (
        <div className='px-8 p-7'>
            <h1 className=" py-5 font-bold text-4xl">
                Liquidity Locker
            </h1>
            <div className='flex flex-row gap-3'>


                <div className='flex flex-row justify-start items-end gap-3 px-7 py-3  border border-zinc-900 rounded-3xl w-fit'>
                    <img src="/radium.png" className='w-5 h-auto' alt="radium" />
                    <FormControl className='w-56 h-10 border-none bg-black'>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                            sx={{ color: 'gray' }}
                        >
                            Select Exchange
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: 'Raydium',
                                id: 'uncontrolled-native',
                            }}
                            sx={{
                                color: 'white',
                                '&:before': {
                                    borderBottomColor: 'transparent',
                                },
                                '&:after': {
                                    borderBottomColor: 'transparent',
                                },
                                '& .MuiNativeSelect-icon': {
                                    color: 'white',
                                },
                            }}
                        >
                            <option value='Raydium' className='text-blue-500 bg-black'>
                                Raydium
                            </option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className='flex flex-row gap-0 h-16 p-2 w-96 bg-[#121212] rounded-2xl'>
                    <button
                        className={`uppercase w-[40%] h-full rounded-xl ${activeButton === 'newLock' ? 'bg-custom-gradient' : ''}`}
                        onClick={() => setActiveButton('newLock')}
                    >
                        New Lock
                    </button>
                    <button
                        className={`uppercase w-[60%] h-full rounded-xl ${activeButton === 'editWithdraw' ? 'bg-custom-gradient' : ''}`}
                        onClick={() => setActiveButton('editWithdraw')}
                    >
                        Edit/withdraw
                    </button>
                </div>
            </div>
            <div className='w-[70%] bg-[#121212] my-8 rounded-2xl'>
                df
            </div>
        </div>
    )
}
