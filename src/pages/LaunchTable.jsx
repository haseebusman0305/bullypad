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
        <div className='w-full'>
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
                                                className='text-[0.8rem] font-bold py-1 px-3 w-fit rounded-2xl'
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
                                <TableCell align="center" sx={{ color: 'white', borderBottom: 'unset' }}>
                                    <span className={`bg-[#1F1F1F] rounded-3xl py-2 w-fit px-3 ${row.Status === 'Success' ? 'text-[#1EBEA5]' : 'text-[#FECA43]'}`}>
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
