import React from 'react'
import { Paper, Grid } from '@mui/material';
import { EmissionsBySource } from '../charts';

const WorldData: React.FC = () => {
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Paper elevation={24} sx={{ padding: "20px" }}>
                <EmissionsBySource />
            </Paper>
        </Grid>
    )
}

export default WorldData