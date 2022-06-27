import React from 'react'
import { Paper, Grid } from '@mui/material';

import { Spinner } from '..';
import { useTemp } from '../../hooks';
import VerticalBarChartGlobalTemp from '../charts/VerticalBarChartGlobalTemp';

const GlobalTemperatureChart: React.FC = () => {
    const { loading, data, error } = useTemp();
    return (
        <Grid item xs={12} sm={12}>
            <Paper elevation={24} sx={{ maxHeight: "230px" }}>
                {loading && !error ? <Spinner /> : <VerticalBarChartGlobalTemp globalData={data} />}
            </Paper>
        </Grid>
    )
}

export default GlobalTemperatureChart