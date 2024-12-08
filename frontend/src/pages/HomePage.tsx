import React from 'react';
import { Typography, Box } from '@mui/material';
import LeadForm from '../components/LeadForm';

const HomePage: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <LeadForm />
    </Box>
  );
};

export default HomePage;