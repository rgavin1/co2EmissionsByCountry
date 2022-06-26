import React, { useEffect } from 'react'
import { Paper, Grid } from '@mui/material';
import { VerticalBarChart } from '../charts';
import { Country } from '../../types';
import { CountryWithFlag } from '../../helper';
import axios from 'axios';

const VerticalBarChartRename: React.FC = () => {
    const [selectedYear, setSelectedYear] = React.useState("2020");
    const [returnedData, setReturnedData] = React.useState<Country[]>([]);
    const [selectedCountryData, setSelectedCountryData] = React.useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = React.useState<any[]>([]);

    useEffect(() => {
        setSelectedCountryData(returnedData.filter((country) => selectedCountries.includes(country.id)))
    }, [selectedCountries])

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/years/${selectedYear}`);
                const countries: Country[] = data.data;
                const testX: Country[] = countries.map((country: Country) => ({ id: country.id, entity: country.entity, code: country.code, year: country.year, annual_co2_emissions: country.annual_co2_emissions, flag: CountryWithFlag[country.entity]?.flag }))
                setReturnedData(testX);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Grid item xs={12} sm={12} md={12}>
            <Paper elevation={24}>
                <VerticalBarChart {...{ selectedCountryData }} />
            </Paper>
        </Grid>
    )
}

export default VerticalBarChartRename