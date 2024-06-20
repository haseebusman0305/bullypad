import React from 'react';
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
import { Link } from 'react-router-dom';

const LaunchTable = ({ rows }) => {
    return (
        <div className='w-full overflow-x-auto'>
            <Link to={'/launches/james'}>
                <TableContainer component={Paper} sx={{
                    backgroundColor: '#121212',
                    borderRadius: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
                    padding: { xs: '0.25rem', sm: '0.5rem', md: '1rem' },
                    marginTop: '1rem'
                }}>
                    <Table sx={{
                        minWidth: '100%',
                        backgroundColor: '#121212',
                        color: 'white',
                        border: 0
                    }} aria-label="launch table">
                        <TableHead>
                            <TableRow>
                                {['Date', 'Launch Name', 'Audit', 'Liquidity Lock', 'Progress', 'Status'].map((header, index) => (
                                    <TableCell key={index} align={index === 0 ? "left" : "center"} sx={{
                                        color: 'white',
                                        borderBottom: 'unset',
                                        fontWeight: 'bold',
                                        padding: { xs: '4px', sm: '8px', md: '16px' },
                                        fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' }
                                    }}>
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index} sx={{ color: 'white', '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align='left' sx={{ color: 'white', borderBottom: 'unset', padding: { xs: '4px', sm: '8px', md: '16px' }, fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' } }}>{row.Date}</TableCell>
                                    <TableCell align="left" sx={{ color: 'white', borderBottom: 'unset', padding: { xs: '4px', sm: '8px', md: '16px' } }}>
                                        <div className='flex flex-row gap-1 sm:gap-2 items-center'>
                                            <img src={`/${row.LaunchName.imageUrl}`} alt={row.LaunchName.name} style={{ width: '1.5rem', height: 'auto' }} />
                                            <div className='flex items-start flex-col'>
                                                <div className='font-bold text-xs sm:text-sm md:text-base uppercase'>{row.LaunchName.name}</div>
                                                <div className='text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] text-blue-700'>{row.LaunchName.detail}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', padding: { xs: '4px', sm: '8px', md: '16px' } }}>
                                        <div className='flex flex-row gap-1 justify-center flex-wrap'>
                                            {row.Audits.map((audit, idx) => (
                                                <div
                                                    key={idx}
                                                    className='text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] font-bold py-1 px-1 sm:px-2 w-fit rounded-xl sm:rounded-2xl flex items-center'
                                                    style={{
                                                        backgroundColor: audit === 'KYC' ? '#157AFB29' : '#1EBEA529',
                                                        color: audit === 'KYC' ? '#157AFB' : '#1EBEA5',
                                                    }}>
                                                    {audit === 'KYC' ? <ShieldOutlinedIcon sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }} /> : <CheckCircleOutlineIcon sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem' } }} />}
                                                    <span className='ml-1'>{audit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', padding: { xs: '4px', sm: '8px', md: '16px' }, fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' } }}>
                                        <div className='text-xs sm:text-sm text-white font-bold'>&#128293;{row.LiquidityLocks.lock}</div>
                                        <div className='text-xs sm:text-sm text-gray-400 flex items-center justify-center'><LockOutlinedIcon sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' } }} /> <span className='ml-1'>{row.LiquidityLocks.value}</span></div>
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', padding: { xs: '4px', sm: '8px', md: '16px' }, fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.875rem' } }}>
                                        {row.Progress.map((progress, idx) => (
                                            <div key={idx} className='text-xs sm:text-sm text-gray-400'>{progress}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset', padding: { xs: '4px', sm: '8px', md: '16px' } }}>
                                        <span className={`bg-[#1F1F1F] rounded-2xl sm:rounded-3xl py-1 sm:py-2 px-2 sm:px-3 text-[0.6rem] sm:text-xs md:text-sm ${row.Status === 'Success' ? 'text-[#1EBEA5]' : 'text-[#FECA43]'}`}>
                                            {row.Status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Link>
        </div>
    );
};

export default LaunchTable;
