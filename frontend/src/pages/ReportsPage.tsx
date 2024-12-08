import React from 'react';
import { Typography, Box } from '@mui/material';
import LeadReports from '../components/LeadReports';

const ReportsPage: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Reports Page
      </Typography>
      <LeadReports />
    </Box>
  );
};

export default ReportsPage;