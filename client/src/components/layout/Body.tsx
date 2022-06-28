import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import { DataTable, GlobalTemperatureChart, WorldDataChart, VerticalBarChartRename, Form } from '../widgets';

const Body: React.FC = () => {
    return (
        <Box p={5}>
            <Grid container spacing={3}>
                <GlobalTemperatureChart />
                <WorldDataChart />
                <Form />
                <VerticalBarChartRename />
                {/* <DataTable /> */}
            </Grid>
        </Box>
    )
}

export default Body