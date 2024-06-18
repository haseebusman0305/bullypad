import React, { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import Button from '@mui/material/Button';

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

const Items = ['No mint function', 'No owner / admin functions', 'No unsafe code in the token contract itself', 'Fully SPL compliant', 'Fully decentralised']

const Services = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleCloseClick = () => setIsVisible(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className='mx-9'>
            <h1 className="px-1 py-7 font-bold text-4xl ">
                Token Minter
            </h1>
            {isVisible && (
                <div className='px-9 py-4 gradientborder rounded-2xl flex justify-between items-start'>
                    <p className="text-sm py-10 text-[#ADADAD] flex-1">
                        Our tokens are fully SPL compliant Non-Mintable Tokens. Use the Bullypad Token factory to mint your very own token at the click of a button. Your Bullypad token will be shown favourably in the Bullypad browser and bypass the need for an audit on the token contract itself, as well as when using our ILO dapp. Anyone can query our token mint factory with your token address to see your new token is a valid, safe, and SPL compliant token.
                    </p>
                    <CloseOutlinedIcon className='self-start cursor-pointer' onClick={handleCloseClick} />
                </div>
            )}
            <div>
                <h3 className='py-5 font-bold text-lg mt-5'>
                    SPL compliant Non-Mintable Tokens Specs
                </h3>
                <div className='grid grid-cols-2 gap-5 mt-1'>
                    {Items.map((item, index) => (
                        <div key={index} className='flex flex-row gap-3 items-center'>
                            <CheckCircleOutlineRoundedIcon className='text-[#1EBEA5] ' />
                            <p className='text-sm text-[#999999]'>{item}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-1/2 px-2 PY-0">
                        <div className="bg-[#141414] rounded-3xl   px-8 py-4">
                            <h3 className='py-1 font-bold text-lg '>
                                Mint your own Solana SPL Token!
                            </h3>
                            <ThemeProvider theme={theme}>
                                <TextField label="Token Name" variant="outlined" fullWidth />
                                <TextField label="Token Symbols" variant="outlined" fullWidth />
                                <p className='text-[0.7rem] text-[#999999] -mt-3'>Total supply (excluding decimals e.g. 100 tokens)</p>
                                <TextField label="Token Supply" variant="outlined" fullWidth />
                                <TextField type="number" variant="outlined" fullWidth />
                                <p className='text-[0.7rem] text-[#999999] -mt-3'>
                                    Decimals (18 reccomended)

                                </p>
                            </ThemeProvider>
                            <button
                                className='w-full py-4 flex items-center justify-center bg-[#1F1F1F] rounded-2xl my-4 hover:bg-[#1d1d25]'
                                onClick={handleUploadClick}
                            >
                                <span className='bg-custom-gradient text-fill-transparent bg-clip-text font-bold uppercase text-lg'>
                                    Upload logo
                                </span>
                            </button>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            {preview && (
                                <div>
                                    <img src={preview} alt="Preview" className='w-full h-auto mt-4 rounded-2xl' />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 px-2">
                        <div className="bg-[#141414] rounded-3xl  p-4">
                            {/* Content of the second div */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
