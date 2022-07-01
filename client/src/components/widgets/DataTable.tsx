import React from 'react'
import { Paper, Box, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCountryPopulation } from '../../hooks';

const columns: GridColDef[] = [
    {
        field: 'entity',
        headerName: 'Country Name',
        width: 150,
        editable: false,
    },
    {
        field: 'code',
        headerName: 'Country Code',
        width: 150,
        editable: false,
    },
    {
        field: 'flag',
        headerName: 'Flag',
        width: 150,
        editable: false,
    },
    {
        field: 'year',
        headerName: 'Year',
        width: 150,
        editable: false,
    },
    {
        field: 'co2',
        headerName: 'Annual CO2 Emissions',
        width: 190,
        editable: false,
    },
    {
        field: 'population',
        headerName: 'Population Size',
        width: 190,
        editable: false,
    },
    // {
    //     field: 'fossil_fuel',
    //     headerName: 'Fossil Fuel (TWh)',
    //     width: 190,
    //     editable: false,
    // }
];

const DataTable: React.FC<{ setSelectedCountries: (c: any) => void; }> = ({ setSelectedCountries }) => {
    const { countries, selectedCountries, userSelectedCountries } = useCountryPopulation();
    return (
        <Grid item xs={12} sm={12} md={5}>
        <Paper>
                <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                        rows={countries}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(newSelectionModel: any) => {
                        userSelectedCountries(newSelectionModel);
                        setSelectedCountries(newSelectionModel);
                    }}
                    selectionModel={selectedCountries}
                />
            </Box>
            </Paper>
        </Grid>
    )
}
export default DataTable