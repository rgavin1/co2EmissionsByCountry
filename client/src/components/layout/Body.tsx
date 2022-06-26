import React from 'react'
import { Box, Grid } from '@mui/material';
import { DataTable, GlobalTemperatureChart, WorldDataChart, VerticalBarChartRename, Form } from '../widgets';

const Body: React.FC = () => {
    return (
        <Box p={5}>
            <Grid container spacing={2}>
                <GlobalTemperatureChart />
                {/* <WorldDataChart />
                <VerticalBarChartRename />
                <Form />
                <DataTable /> */}
            </Grid>
        </Box>
    )
}

export default Body