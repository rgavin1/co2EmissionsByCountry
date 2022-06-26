import React, { SetStateAction, Dispatch, useEffect } from 'react';
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
import axios from 'axios';
import { Paper, Box, Button, Stack, Grid, Container, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, BottomNavigation, Typography } from '@mui/material';
import VerticalBarChart from './VerticalBarChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './App.css';
import { CountryWithFlag } from './helper';
import LanguageIcon from '@mui/icons-material/Language';
import VerticalBarChartGlobalTemp from "./VerticalBarChartGlobalTemp";
import WorldData from "./WorldData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

export type Country = {
  id: string;
  entity: string;
  code: string;
  year: string;
  annual_co2_emissions: number;
  // population: string;
  // population: string;
  flag: string;
}

const DataTable: React.FC<{ selectedCountries: any; returnedData: any; setSelectedCountries: Dispatch<SetStateAction<any>> }> = ({ selectedCountries, setSelectedCountries, returnedData }) => {
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

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = React.useState<any[]>([]);
  const [selectedCountryData, setSelectedCountryData] = React.useState<Country[]>([]);
  const [returnedData, setReturnedData] = React.useState<Country[]>([]);
  const [selectedYear, setSelectedYear] = React.useState("2020");
  const [avaliableYears, setAvaliableYears] = React.useState<any[]>([]);

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


  const years: any[] = [
    { id: "1", year: "2020" },
    { id: "2", year: "1988" },
    { id: "3", year: "1990" },
    { id: "4", year: "1900" },
    { id: "5", year: "1998" },
    { id: "6", year: "2021" },
    { id: "7", year: "2002" },
    { id: "8", year: "2001" },
    { id: "9", year: "2000" },
    { id: "10", year: "1761" },
    { id: "11", year: "1760" },
    { id: "12", year: "1759" },
    { id: "13", year: "1758" },
    { id: "14", year: "1757" },
    { id: "15", year: "1756" },
    { id: "16", year: "1755" },
    { id: "17", year: "1754" },
    { id: "18", year: "1753" },
    { id: "19", year: "1752" },
    { id: "20", year: "1751" },
    { id: "21", year: "1750" },
  ]

  useEffect(() => {
    setSelectedCountryData(returnedData.filter((country) => selectedCountries.includes(country.id)))
  }, [selectedCountries])

  const [selectedNewYear, setSelectedNewYear] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedNewYear(event.target.value as string);
  };

  return (
    <>
      {/* Header */}
      <header>
        <Box sx={{ backgroundColor: "#2dbbff", padding: "15px" }}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Stack flexDirection="row" alignItems="center">
                  <LanguageIcon />
                  <Typography variant="h5" component="h1" >World Emissions</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </header>
      <Box p={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Paper elevation={24} sx={{ maxHeight: "230px" }}>
              <VerticalBarChartGlobalTemp />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={24}>
              <WorldData />
            </Paper>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <Paper elevation={24}>
              <WorldData />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={24}>
              <WorldData />
            </Paper>
          </Grid> */}
          <Grid item xs={12} sm={12} md={12}>
            <Paper elevation={24}>
              <VerticalBarChart {...{ selectedCountryData }} />
            </Paper>
          </Grid>
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
          <Grid item xs={12} md={9}>
            <Paper elevation={24}>
              <DataTable {...{ selectedCountries, returnedData, setSelectedCountries }} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Footer */}
      <footer>
        <Box sx={{ backgroundColor: "#2dbbff", marginTop: "30px", paddingBottom: "15px" }}>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Footer Item1</Box>
                <Box>Footer SubItem1</Box>
                <Box>Footer SubItem2</Box>
                <Box>Footer SubItem3</Box>
                <Box>Footer SubItem4</Box>
                <Box>Footer SubItem5</Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Footer Item2</Box>
                <Box>Footer SubItem1</Box>
                <Box>Footer SubItem2</Box>
                <Box>Footer SubItem3</Box>
                <Box>Footer SubItem4</Box>
                <Box>Footer SubItem5</Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Footer Item3</Box>
                <Box>Footer SubItem1</Box>
                <Box>Footer SubItem2</Box>
                <Box>Footer SubItem3</Box>
                <Box>Footer SubItem4</Box>
                <Box>Footer SubItem5</Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
}

export default App;
