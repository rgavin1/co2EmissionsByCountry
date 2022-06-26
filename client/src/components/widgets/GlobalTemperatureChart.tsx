import React from 'react'
import { Paper, Grid } from '@mui/material';
import VerticalBarChartGlobalTemp from '../charts/VerticalBarChartGlobalTemp';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GlobalTemperatureChart: React.FC = () => {
    return (
        <Grid item xs={12} sm={12}>
            <Paper elevation={24} sx={{ maxHeight: "230px" }}>
                <VerticalBarChartGlobalTemp />
            </Paper>
        </Grid>
    )
}

export default GlobalTemperatureChart