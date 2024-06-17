import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
const Lounches = () => {
    return (
        <Container className='px-1 p-7 font-bold text-4xl'>
            <h1 className="px-1 py-7 font-bold text-4xl ">
                LAUNCHES
            </h1>
            <FormControl className='w-44 h-10 border-none' sx={{ backgroundColor: '#212121' }}>
                <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    sx={{ color: 'white'}}
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
                       margin:'2rem',
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
                    <option value='Raydium' className='text-white  bg-black'>Raydium</option>
                </NativeSelect  >
            </FormControl>

        </Container>
    );
}

export default Lounches;
