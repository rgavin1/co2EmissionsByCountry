import React from 'react'
import { Paper, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Country } from '../../types';

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
        field: 'annual_co2_emissions',
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
    {
        field: 'fossil_fuel',
        headerName: 'Fossil Fuel (TWh)',
        width: 190,
        editable: false,
    }
];

const DataTable: React.FC = () => {
    const [selectedCountryData, setSelectedCountryData] = React.useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = React.useState<any[]>([]);
    const [returnedData, setReturnedData] = React.useState<Country[]>([]);

    React.useEffect(() => {
        setSelectedCountryData(returnedData.filter((country) => selectedCountries.includes(country.id)))
    }, [selectedCountries])

    return (
        <Paper>
            <Box sx={{ height: 375, width: '100%' }}>
                <DataGrid
                    rows={returnedData}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(newSelectionModel: any) => {
                        setSelectedCountries(newSelectionModel);
                    }}
                    selectionModel={selectedCountries}
                />
            </Box>
        </Paper>
    )
}
export default DataTable