import React from 'react'
import { Box, Grid } from '@mui/material';
import { DataTable, GlobalTemperatureChart, WorldDataChart, VerticalBarChartRename } from '../widgets';

const Body: React.FC = () => {
    const [selectedCountries, setSelectedCountries] = React.useState();
    return (
        <Box p={5}>
            <Grid container spacing={3}>
                {/* <Form /> */}
                <VerticalBarChartRename {...{ selectedCountries }} />
                <DataTable {...{ setSelectedCountries }} />
                <GlobalTemperatureChart />
                <WorldDataChart />
            </Grid>
        </Box>
    )
}

export default Body