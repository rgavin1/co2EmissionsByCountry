import React from 'react'
import { Paper, Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import axios from 'axios';

const Form: React.FC = () => {
    const [selectedNewYear, setSelectedNewYear] = React.useState('');
    const [avaliableYears, setAvaliableYears] = React.useState<any[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/years`);
                const years: any[] = data.data;
                setAvaliableYears(years);
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedNewYear(event.target.value as string);
    };

    return (
        <Grid item xs={12} sm={12} md={3}>
            <Paper elevation={24}>
                <Grid container p={2}>
                    <FormControl fullWidth style={{ marginBottom: "15px" }}>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedNewYear}
                            label="Country"
                            onChange={handleChange}
                        >
                            {avaliableYears.map((year: any) => <MenuItem value={year.year}>{year.year}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedNewYear}
                            label="Year"
                            onChange={handleChange}
                        >
                            {avaliableYears.map((year: any) => <MenuItem value={year.year}>{year.year}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Form