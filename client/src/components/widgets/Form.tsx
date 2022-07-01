import React from 'react'
import { Paper, Grid, FormControl, InputLabel, Select, Switch, MenuItem, SelectChangeEvent, FormControlLabel, FormGroup } from '@mui/material';
import { useCountryPopulation, useYears } from '../../hooks';
import Spinner from '../Spinner';

const Form: React.FC = () => {
    const { loading, countries, error } = useCountryPopulation();
    const { loading: loadingYears, avaliableYears, error: yearsHasError } = useYears();

    const [selectedNewYear, setSelectedNewYear] = React.useState('');
    const [selectedCountryName, setSelectedCountryName] = React.useState('');

    const handleChangeYear = (event: SelectChangeEvent) => {
        setSelectedNewYear(event.target.value as string);
    };
    const handleChangeCountryName = (event: SelectChangeEvent) => {
        setSelectedCountryName(event.target.value as string);
        // fetchCountryByYear(event.target.value as string, event.target.value as string)
    };

    return (
        <Grid item xs={12} sm={12} md={3}>
            <Paper elevation={24}>
                <Grid container p={2}>
                    {loading && loadingYears && !error && !yearsHasError ? <Spinner /> : <><FormControl fullWidth style={{ marginBottom: "15px" }}>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCountryName}
                            label="Country"
                            onChange={handleChangeCountryName}
                        >
                            {countries.map((country: any, index) => <MenuItem key={index} value={country.entity}>{country.entity}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedNewYear}
                                label="Year"
                                onChange={handleChangeYear}
                            >
                                {avaliableYears.map((year: string, index) => <MenuItem key={index} value={year}>{year}</MenuItem>)}
                            </Select>
                        </FormControl></>}
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Form