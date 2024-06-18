import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

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
        <section className='px-8 p-7 font-bold text-4xl'>
            <h1 className="pl-10 py-5 font-bold text-4xl">
                LAUNCHES
            </h1>
            <div className='flex flex-row justify-start items-end gap-3 px-7 py-4 border border-zinc-900 rounded-3xl w-fit'>
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
            <div className='flex flex-row gap-3 my-5'>


                <div className='border rounded-md border-zinc-700 w-[74%]'>

                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchIcon />
                </div>
                <div className='flex flex-row gap-2  items-center '>
                    <span className='text-lg dont-bold '>
                        Sort By:
                    </span>

                    <FormControl    >
                        <Select
                            value={selectedValue}
                            onChange={handleChange}
                            sx={{
                                color: 'white',
                                backgroundColor: '#141414',
                                borderRadius: "2rem",
                                fontSize: '1rem',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                }
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
                            <MenuItem value={10} sx={{ color: 'white', fontSize: '0.9rem', backgroundColor: '#141414' }}><CheckCircleOutlinedIcon fontSize='' /> All</MenuItem>
                            <MenuItem value={20} sx={{ color: 'white', fontSize: '0.9rem', backgroundColor: '#141414' }}><CheckCircleOutlinedIcon fontSize='' /> Audit only</MenuItem>
                            <MenuItem value={30} sx={{ color: 'white', fontSize: '0.9rem', backgroundColor: '#141414' }}><ShieldOutlinedIcon fontSize='' /> KYC</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Link to={'/launches/james'}>
                <TableContainer component={Paper} sx={{ backgroundColor: '#121212', borderRadius: '1.5rem', padding: '1rem', marginTop: '1rem' }}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#121212', color: 'white', border: 0 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', fontWeight: 'bold' }}>Date</TableCell>
                                <TableCell align="left" sx={{ color: 'white', borderBottom: 'unset', fontWeight: 'bold' }}>Launch Name</TableCell>
                                <TableCell align="left" sx={{ color: 'white', borderBottom: 'unset', fontWeight: 'bold' }}>Audit</TableCell>
                                <TableCell align="right" sx={{ color: 'white', borderBottom: 'unset', fontWeight: 'bold' }}>Liquidity Lock</TableCell>
                                <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', fontWeight: 'bold' }}>Progress</TableCell>
                                <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', fontWeight: 'bold' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index} sx={{ color: 'white', '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align='center' sx={{ color: 'white', borderBottom: 'unset' }}>{row.Date}</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset' }}>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <img src={`/${row.LaunchName.imageUrl}`} alt={row.LaunchName.name} style={{ width: '2.4rem', height: 'auto' }} />
                                            <div className='flex items-start flex-col'>
                                                <div className='font-bold text-lg uppercase'>{row.LaunchName.name}</div>
                                                <div className='text-[0.7rem] text-blue-700'>{row.LaunchName.detail}</div>
                                            </div>
                                        </div>

                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset' }}>
                                        <div className='flex flex-row gap-1'>

                                            {row.Audits.map((audit, idx) => (

                                                <div
                                                    key={idx}
                                                    className='text-[0.8rem] font-bold py-1 px-3 w-fit rounded-2xl  '
                                                    style={{
                                                        backgroundColor: audit === 'KYC' ? '#157AFB29' : '#1EBEA529',
                                                        color: audit === 'KYC' ? '#157AFB' : '#1EBEA5',
                                                    }}>
                                                    {audit === 'KYC' ? <ShieldOutlinedIcon className='mr-1 text-[0.4rem]' /> : <CheckCircleOutlineIcon className='mr-1' />}
                                                    <span>  {audit}</span>
                                                </div>
                                            ))}

                                        </div>
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset' }}>

                                        <div className='text-sm text-white text-bold '>&#128293;{row.LiquidityLocks.lock}</div>
                                        <div className='text-sm text-gray-400'><LockOutlinedIcon fontSize='0.7rem' /> {row.LiquidityLocks.value}</div>
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset' }}>
                                        {row.Progress.map((progress, idx) => (
                                            <div key={idx} className='text-sm text-gray-400 '>{progress}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset' }} > <span className={`bg-[#1F1F1F] rounded-3xl py-2 w-fit px-3 ${row.Status == 'Success' ? 'text-[#1EBEA5]' : 'text-[#FECA43]'}`}>

                                        {row.Status}
                                    </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Link>
        </section>
    );
}

export default Launches;
