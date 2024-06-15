import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

const Services = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h1">
                    Services
                </Typography>
                <Button component={Link} to="/services" variant="contained" color="primary">
                    Services
                </Button>
            </Box>
        </Container>
    );
}
export default Services;