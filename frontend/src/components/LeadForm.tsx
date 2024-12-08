import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_LEAD } from '../graphql/mutations';
import { TextField, Radio, FormControlLabel, RadioGroup, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const LeadForm: React.FC = () => {
    const [registerLead] = useMutation(REGISTER_LEAD);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobile: '',
        postcode: '',
        service: '', // Change to a single string for radio buttons
    });
    const [open, setOpen] = useState(false); // State for Snackbar

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            service: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await registerLead({ variables: { ...formState, services: [formState.service] } }); // Convert to array for mutation
            setFormState({
                name: '',
                email: '',
                mobile: '',
                service: '',
                postcode: '',
            });
            setOpen(true); // Show Snackbar on success
        } catch (error) {
            console.error('Error registering lead:', error);
        }
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} mt={2}>
            <Typography variant="h5" gutterBottom>
                Register Lead
            </Typography>
            <TextField
                label="Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Postcode"
                name="postcode"
                value={formState.postcode}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                label="Mobile"
                name="mobile"
                value={formState.mobile}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <Typography variant="h6" gutterBottom>
                Select Service
            </Typography>
            <RadioGroup name="service" value={formState.service} onChange={handleRadioChange}>
                <FormControlLabel value="DELIVERY" control={<Radio />} label="Delivery" />
                <FormControlLabel value="PICKUP" control={<Radio />} label="Pickup" />
                <FormControlLabel value="PAYMENT" control={<Radio />} label="Payment" />
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary">
                Register Lead
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position Snackbar in the middle
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Lead registered successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default LeadForm;