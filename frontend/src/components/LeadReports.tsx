import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LEADS } from '../graphql/queries';
import { Lead } from '../models/Lead';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const LeadReports: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<{ leads: Lead[] }>(GET_LEADS);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>
        Leads Report
      </Typography>
      <List>
        {data?.leads.map((lead) => (
          <ListItem key={lead.id}>
            <ListItemText
              primary={`${lead.name} - ${lead.email} - ${lead.mobile} - ${lead.postcode}`}
              secondary={`Services: ${lead.services.join(', ')}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LeadReports;