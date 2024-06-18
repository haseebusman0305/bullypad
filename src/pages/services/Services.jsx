import React, { useState, useEffect } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { TextField, ThemeProvider, createTheme } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

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

const Items = [
    'No mint function',
    'No owner / admin functions',
    'No unsafe code in the token contract itself',
    'Fully SPL compliant',
    'Fully decentralised',
];

const Services = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isCheckedLabel, setIsCheckedLabel] = useState(false);
    const [isCheckedRequired, setIsCheckedRequired] = useState(false);
    const [isCheckedAdjustable, setIsCheckedAdjustable] = useState(false);
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [tokenSupply, setTokenSupply] = useState('');
    const [decimals, setDecimals] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (tokenName && tokenSymbol && tokenSupply && decimals) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [tokenName, tokenSymbol, tokenSupply, decimals]);

    const handleCloseClick = () => setIsVisible(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleLabelCheckboxChange = (event) => {
        setIsCheckedLabel(event.target.checked);
    };

    const handleRequiredCheckboxChange = (event) => {
        setIsCheckedRequired(event.target.checked);
    };

    const handleAdjustableCheckboxChange = (event) => {
        setIsCheckedAdjustable(event.target.checked);
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
                <div className="flex flex-wrap -mx-2 mt-8">
                    <div className="w-1/2 px-2 PY-0">
                        <div className="bg-[#141414] rounded-3xl   px-8 py-4">
                            <h3 className='py-1 font-bold text-lg '>
                                Mint your own Solana SPL Token!
                            </h3>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    label="Token Name"
                                    variant="outlined"
                                    fullWidth
                                    value={tokenName}
                                    onChange={(e) => setTokenName(e.target.value)}
                                />
                                <TextField
                                    label="Token Symbols"
                                    variant="outlined"
                                    fullWidth
                                    value={tokenSymbol}
                                    onChange={(e) => setTokenSymbol(e.target.value)}
                                />
                                <p className='text-[0.7rem] text-[#999999] -mt-3'>Total supply (excluding decimals e.g. 100 tokens)</p>
                                <TextField
                                    label="Token Supply"
                                    variant="outlined"
                                    fullWidth
                                    value={tokenSupply}
                                    onChange={(e) => setTokenSupply(e.target.value)}
                                />
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    fullWidth
                                    value={decimals}
                                    onChange={(e) => setDecimals(e.target.value)}
                                />
                                <p className='text-[0.7rem] text-[#999999] -mt-3'>
                                    Decimals (18 recommended)
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
                                    <img src={preview} alt="Preview" className='w-full h-auto mt-4 rounded-2xl object-cover' />
                                </div>
                            )}
                            <div className='-mr-3 ml-3'>
                                <FormControlLabel
                                    control={<Checkbox checked={isCheckedLabel} onChange={handleLabelCheckboxChange} />}
                                    label="Revoke Freeze"
                                    className={`w-full bg-[#1F1F1F] rounded-2xl p-2 mt-2 ${isCheckedLabel ? 'gradientborder' : ''}`}
                                    fullWidth
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={isCheckedRequired} onChange={handleRequiredCheckboxChange} />}
                                    label="Revoke Mint"
                                    className={`w-full bg-[#1F1F1F] rounded-2xl p-2 mt-2 ${isCheckedRequired ? 'gradientborder' : ''}`}
                                    fullWidth
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={isCheckedAdjustable} onChange={handleAdjustableCheckboxChange} />}
                                    label="Revoke Adjustable Metadata"
                                    className={`w-full bg-[#1F1F1F] rounded-2xl p-2 mt-2 ${isCheckedAdjustable ? 'gradientborder' : ''}`}
                                    fullWidth
                                />
                            </div>
                            <div className='flex flex-row mt-5 gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="tax" className='text-sm font-bold '>Buy Tax</label>
                                    <select name="tax" id="tax" className='w-56 h-12 rounded-xl p-2 text-white bg-[#1f1e1e]'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="selltax" className='text-sm font-bold '>Sell Tax</label>
                                    <select name="selltax" id="selltax" className='w-56 h-12 rounded-xl p-2 text-white bg-[#1f1e1e]'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-between mt-7 '>
                                <div className='flex flex-col items-start gap-2'>
                                    <span className='text-sm text-[#999999]'>
                                        Total supply (including decimals - raw amount)
                                    </span>
                                    <span className='text-lg text-[#aeaeae]'>
                                        0
                                    </span>
                                </div>
                                <div className='flex flex-col items-end gap-2'>
                                    <span className='bg-custom-gradient text-fill-transparent bg-clip-text font-bold'>
                                        Fee: 1.5 SOL
                                    </span>
                                    <span className='text-[0.9rem] text-[#aeaeae]'>
                                        + 0.2% total supply
                                    </span>
                                </div>
                            </div>
                            <button
                                className={`w-full py-4 flex items-center justify-center rounded-2xl my-4 hover:bg-[#1d1d25] mt-6 ${isButtonDisabled ? 'bg-[#666666] cursor-not-allowed' : 'bg-custom-gradient'}`}
                                disabled={isButtonDisabled}
                            >
                                <span className=' font-bold uppercase text-lg '>
                                    Mint a new token
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 px-2">
                        <div className="bg-[#141414] rounded-3xl  p-8">
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-lg font-bold '>
                                    Your Token
                                </h1>
                                <span >
                                    <CachedRoundedIcon />
                                </span>
                            </div>
                            <div className='flex justify-start gap-1 flex-col mt-10'>
                                <span className='text-sm text-[#9a9a9a]'>
                                    You have not minted any SPL Token yet.
                                </span><span className='text-sm text-[#9a9a9a]'> All Tokens generated by your account will be shown here.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
