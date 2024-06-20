import React, { useState } from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import { TextField, ThemeProvider, createTheme, Grid } from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginTop: '2rem',
                    marginBottom: '1rem',
                    color: '#ffffff',
                    '& .MuiOutlinedInput-root': {
                        color: '#ffffff',
                        '& fieldset': {
                            borderColor: '#999999',
                            borderRadius: '12px',
                            borderWidth: '1px',
                        },
                        '& input': {
                            color: '#ffffff',
                        },
                        '&::placeholder': {
                            color: '#999999',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#999999',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        '& fieldset': {
                            borderColor: '#999999',
                            borderWidth: '1px',
                        },
                    },
                    '& .MuiOutlinedInput-root:hover': {
                        '& fieldset': {
                            borderColor: '#999999',
                            borderWidth: '1px',
                        },
                    },
                },
            },
        },
    },
});

export default function Liquidity() {
    const [activeButton, setActiveButton] = useState('newLock');
    const [border, setBorder] = useState(false);
    const [showPairs, setShowPairs] = useState(false);

    return (
        <div className='px-8 p-7'>
            <h1 className=" py-5 font-bold text-3xl">
                Liquidity Locker
            </h1>
            <div className='flex flex-wrap gap-3'>
                <div className='flex flex-row justify-start items-end gap-3 px-7 py-3  border border-zinc-900 rounded-3xl w-full md:w-fit'>
                    <img src="/radium.png" className='w-5 h-auto' alt="radium" />
                    <FormControl className='w-full md:w-56 h-10 border-none bg-black'>
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
                <div className='flex flex-row gap-0 h-16 p-2 w-full md:w-96 ml-0 md:ml-6 bg-[#121212] rounded-2xl'>
                    <button
                        className={`uppercase w-[40%] h-full rounded-xl font-bold  text-[0.9rem] ${activeButton === 'newLock' ? 'bg-custom-gradient' : ''}`}
                        onClick={() => setActiveButton('newLock')}
                    >
                        New Lock
                    </button>
                    <button
                        className={`uppercase w-[60%] h-full rounded-xl font-bold text-[0.9rem] ${activeButton === 'editWithdraw' ? 'bg-custom-gradient' : ''}`}
                        onClick={() => setActiveButton('editWithdraw')}
                    >
                        Edit/withdraw
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[75%] bg-[#121212] my-8 rounded-2xl p-6'>
                <h3 className='py-1 font-bold text-[1rem] '>
                    Enter the Raydium pairs address you’d like to lock liquidity for
                </h3>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Raydium pair address... "
                        variant="outlined"
                        fullWidth
                    />
                    <p className='text-[0.8rem] text-[#999999] ml-4 -mt-3'>e.g. 0xc70bb2736e218861dca818d1e9f7a1930fe61e5b</p>
                </ThemeProvider>

                {!showPairs && (
                    <Link
                        className='bg-custom-gradient text-fill-transparent bg-clip-text font-bold w-fit text-[1rem] my-7 flex items-center cursor-pointer'
                        onClick={() => setShowPairs(true)}
                    >
                        Get LP-Token
                        <ArrowOutwardRoundedIcon sx={{ fill: "url(#customGradient)" }} className='ml-1 ' />
                    </Link>
                )}
                {showPairs && (
                    <div>
                        <h3 className='py-1 font-bold text-[0.98rem] my-5'>
                            Pairs found
                        </h3>
                        <div className={`w-full rounded-xl flex flex-row justify-between py-4 px-4 bg-[#202020] ${border ? 'gradientborder' : ''}`} onClick={() => setBorder(!border)}>
                            <span className='uppercase font-bold text-lg flex flex-row gap-2  items-center'>
                                <img src="/radium.png" alt="raydium" className='w-5 h-5' />
                                DEGE /
                                <img className='w-5 h-5 flex-shrink-0' src="/solana.png" alt="" />
                                SOL
                            </span>
                            <span className='font-bold text-lg'>
                                100
                            </span>
                        </div>
                        <button
                            className={`w-full py-3 flex items-center justify-center rounded-2xl my-4 hover:bg-[#1d1d25] mt-6 ${!border ? 'bg-[#2a2a2a] cursor-not-allowed ' : 'bg-custom-gradient'}`}
                            disabled={!border}
                        >
                            <span className={` font-bold uppercase text-lg ${!border ? 'text-[#858383]' : 'text-white'} `}>
                                continue
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
