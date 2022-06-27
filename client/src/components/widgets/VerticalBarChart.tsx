import React from 'react'
import { Paper, Grid } from '@mui/material';

import { VerticalBarChart } from '../charts';

const VerticalBarChartRename: React.FC = () => {
    return (
        <Grid item xs={12} sm={12} md={12}>
            <Paper elevation={24}>
                <VerticalBarChart />
            </Paper>
        </Grid>
    )
}

export default VerticalBarChartRename