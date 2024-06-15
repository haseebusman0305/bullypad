import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

const Lounches = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h1">
                    New Launches
                </Typography>
                <Button component={Link} to="/launches" variant="contained" color="primary">
                    Lounches
                </Button>
            </Box>
        </Container>
    );
}

export default Lounches;
