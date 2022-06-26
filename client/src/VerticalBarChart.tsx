import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container } from '@mui/material';
import { Country } from './App';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBarChart: React.FC<{ selectedCountryData: Country[]; responsiveness?: boolean; }> = ({ selectedCountryData, responsiveness }) => {
    const options = {
        responsive: responsiveness,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        },
    };

    const labels = [...selectedCountryData.map(country => `${country.entity} ${country.flag}`)];

    const data = {
        labels,
        backgroundColor: "#212121",
        datasets: [
            // {
            //     label: 'Population',
            //     data: [102, 32, 324, 49, 0, 103, 849, 64, 24, 144, 36],
            //     backgroundColor: '#4283e3b5',
            // },
            {
                label: 'CO2 Emissions',
                data: [...selectedCountryData.map(country => country.annual_co2_emissions)],
                backgroundColor: '#4283e3b5',
            },
        ],
    };

    return <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
        <Bar options={options} data={data} />
    </Container>;
}

export default VerticalBarChart