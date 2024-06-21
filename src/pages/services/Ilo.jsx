import React, { useState } from "react";
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Nunito, sans-serif',
    },
});

const Ilo = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='px-4 sm:px-8 py-5 flex flex-wrap flex-col'>
                <h1 className="py-3 sm:py-5 font-bold text-2xl md:text-3xl">
                    Create Initial Liquidity Offering (ILO)
                </h1>
                <div className='flex flex-row justify-start items-end gap-3 px-4 sm:px-7 py-2 sm:py-3 border border-zinc-900 rounded-3xl w-full sm:w-fit'>
                    <img src="/radium.png" className='w-4 sm:w-5 h-auto' alt="radium" />
                    <FormControl className='w-full sm:w-56 h-10 border-none bg-black'>
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
                <div className="bg-[#121212] rounded-2xl p-4 my-6 sm:my-8">
                    <div onClick={toggleExpand} className="flex flex-row flex-wrap justify-between items-center px-2 sm:px-3 cursor-pointer">
                        <div className="flex flex-col justify-start gap-2 w-full sm:w-auto">
                            <h3 className="text-base sm:text-lg font-bold">
                                Launchpad
                            </h3>
                            <span className="text-xs sm:text-sm">
                                Run a decentralised Initial Liquidity Offering (ILO) to raise funds and liquidity for your project with our trusted decentralised launchpad.
                            </span>
                        </div>
                        <div className="mt-2 sm:mt-0">
                            <span className="bg-custom-gradient text-fill-transparent bg-clip-text font-bold text-sm sm:text-[1.1rem] border-none outline-none flex items-center">
                                {isExpanded ? 'hide' : 'show more'} {isExpanded ? <KeyboardArrowUpIcon sx={{ fill: "url(#customGradient)" }} /> : <KeyboardArrowDownIcon sx={{ fill: "url(#customGradient)" }} />}
                            </span>
                        </div>
                    </div>
                    <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 my-6">
                            <div className="flex justify-center items-center flex-col gap-5 w-full sm:w-[48%] py-8 sm:py-16 bg-[#202020] rounded-2xl">
                                <img className="w-10 sm:w-14 h-auto" src="/logo_bull.png" alt="logo" />
                                <h1 className="text-base sm:text-lg font-bold">Bullypad</h1>
                                <span className="text-[#999999] text-xs sm:text-sm text-center px-4">
                                    Is your project stellar!? Apply to be incubated by Bullypad by sending us a mail at:
                                    <span className="text-white">
                                        support@bullypad.io
                                    </span>
                                </span>
                                <span className="text-[#999999] text-xs sm:text-sm text-center px-4">
                                    If you would like to be incubated do not create a presale yet, we'll help with marketing, KYC, Audits, Hardcaps and presale parameters.
                                </span>
                            </div>
                            <div className="w-full sm:w-[50%] px-2 sm:px-4 mt-4 sm:mt-0">
                                <h3 className="text-base sm:text-lg font-bold py-2 sm:py-3">
                                    Presale best practices
                                </h3>
                                <span>
                                    <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-[#999999] gap-2 leading-normal text-xs sm:text-sm">
                                        <li>Raise around $300k. <span className="text-white">The best presales raise less.</span> Don't be greedy. Raise less so there is room for your market cap to grow. In this instance, you have a growing community of happy investors who will use social media effectively to talk about your project positively, as opposed to a community of annoyed investors who are in the red. Which would you prefer?</li>
                                        <li>Use token vesting to lock as many of your team tokens as you can to increase trust in your project and your tokenomics score in the presale.</li>
                                        <li>Use token vesting to send tokens to marketers if you need to give tokens to anyone before a presale concludes. This ensures no one can create a pair on an exchange with liquidity before a presale concludes and set the initial price (this will cause the presale to fail).</li>
                                        <li>Build trust by applying for <span className="text-white">Audits and KYC</span> . Alternatively, use our DEGEGAM safe-token minter to mint a pre-audited token.</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl bg-[#121212] px-3 sm:px-5 py-4 sm:py-5"  >
                    <h3 className="text-base sm:text-lg font-bold pb-2 sm:pb-3 my-1 sm:my-2">
                        Create Your Presale
                    </h3>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: '1rem' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter your token address..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Ilo;