import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import LaunchTable from './LaunchTable.jsx';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '80ch',
        },
    },
}));

function createData(Date, LaunchName, Audits, LiquidityLocks, Progress, Status) {
    return { Date, LaunchName, Audits, LiquidityLocks, Progress, Status };
}

const rows = [
    createData('9 Feb 2024', { name: 'JAMES', detail: 'JAMES/SOL', imageUrl: 'alpaca.png' }, ['Audited', 'KYC'], { lock: 'Forever', value: '60%' }, ['0/1400 SOL', '50%'], 'Upcoming'),
    createData('3 June 2024', { name: 'BULLY', detail: 'BULLY/SOL', imageUrl: 'logo_bull.png' }, ['Audited'], { lock: 'Forever', value: '60%' }, ['0/1400 SOL', '40%'], 'Success'),
];

const Launches = () => {
    const [selectedValue, setSelectedValue] = useState(10);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section className='px-4 sm:px-8 py-4 sm:py-7'>
            <h1 className="pl-2 sm:pl-10 py-3 sm:py-5 font-bold text-2xl sm:text-3xl">
                LAUNCHES
            </h1>
            <div className='flex flex-row justify-start items-end gap-2 sm:gap-3 px-3 sm:px-7 py-2 sm:py-4 border border-zinc-900 rounded-xl sm:rounded-3xl w-fit'>
                <img src="/radium.png" className='w-4 sm:w-5 h-auto' alt="radium" />
                <FormControl className='w-40 sm:w-56 h-8 sm:h-10 border-none bg-black'>
                    <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        sx={{ color: 'gray', fontSize: '0.8rem', sm: { fontSize: '1rem' } }}
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
                            fontSize: '0.8rem',
                            sm: { fontSize: '1rem' },
                            '&:before': { borderBottomColor: 'transparent' },
                            '&:after': { borderBottomColor: 'transparent' },
                            '& .MuiNativeSelect-icon': { color: 'white' },
                        }}
                    >
                        <option value='Raydium' className='text-blue-500 bg-black'>
                            Raydium
                        </option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 my-3 sm:my-5'>
                <div className="border rounded-md border-zinc-700 w-full sm:w-3/4 flex flex-row justify-between pr-2 py-1 items-center min-w-0 overflow-hidden">
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        className="flex-shrink min-w-[50px] mr-2"
                    />
                    <SearchIcon className="flex-shrink-0" />
                </div>
                <div className='flex flex-row gap-2 items-center justify-between sm:justify-start'>
                    <span className='text-sm sm:text-lg font-bold'>
                        Sort By:
                    </span>
                    <FormControl>
                        <Select
                            value={selectedValue}
                            onChange={handleChange}
                            sx={{
                                color: 'white',
                                backgroundColor: '#141414',
                                borderRadius: "2rem",
                                fontSize: '0.8rem',
                                sm: { fontSize: '1rem' },
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#141414',
                                        color: 'white',
                                    }
                                }
                            }}
                        >
                            <MenuItem value={10} sx={{ color: 'white', fontSize: '0.8rem', sm: { fontSize: '0.9rem' }, backgroundColor: '#141414' }}><CheckCircleOutlinedIcon fontSize='small' /> All</MenuItem>
                            <MenuItem value={20} sx={{ color: 'white', fontSize: '0.8rem', sm: { fontSize: '0.9rem' }, backgroundColor: '#141414' }}><CheckCircleOutlinedIcon fontSize='small' /> Audit only</MenuItem>
                            <MenuItem value={30} sx={{ color: 'white', fontSize: '0.8rem', sm: { fontSize: '0.9rem' }, backgroundColor: '#141414' }}><ShieldOutlinedIcon fontSize='small' /> KYC</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <LaunchTable rows={rows} />
        </section>
    );
}

export default Launches;