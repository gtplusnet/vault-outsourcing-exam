import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LEADS, GET_SERVICE_COUNTS } from '../graphql/queries';
import { Lead } from '../models/Lead';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const LeadReports: React.FC = () => {
  const { loading: leadsLoading, error: leadsError, data: leadsData, refetch: refetchLeads } = useQuery<{ leads: Lead[] }>(GET_LEADS);
  const { loading: countsLoading, error: countsError, data: countsData, refetch: refetchCounts } = useQuery(GET_SERVICE_COUNTS);

  useEffect(() => {
    refetchLeads();
    refetchCounts();
  }, [refetchLeads, refetchCounts]);

  if (leadsLoading || countsLoading) return <Typography>Loading...</Typography>;
  if (leadsError) return <Typography>Error: {leadsError.message}</Typography>;
  if (countsError) return <Typography>Error: {countsError.message}</Typography>;

  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>
        Leads Report
      </Typography>
      <Typography variant="h6" gutterBottom>
        Delivery: {countsData.serviceCounts.delivery}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Pickup: {countsData.serviceCounts.pickup}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Payment: {countsData.serviceCounts.payment}
      </Typography>
      <List>
        {leadsData?.leads.map((lead) => (
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