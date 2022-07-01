import React from 'react'
import { Paper, Grid } from '@mui/material';

import { VerticalBarChart } from '../charts';

const VerticalBarChartRename: React.FC<{ selectedCountries: any }> = ({ selectedCountries }) => {
    return (
        <Grid item xs={12} sm={12} md={7}>
            <Paper elevation={24}>
                <VerticalBarChart {...{ selectedCountries }} />
            </Paper>
        </Grid>
    )
}

export default VerticalBarChartRename