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

import { Spinner } from '..';
import { useCountryPopulation } from '../../hooks';
import { Country } from '../../types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBarChart: React.FC = () => {
    const { loading, countries, error } = useCountryPopulation();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Population and CO2 Emissions: ${countries[0]?.year}`,
            },
        },
    };

    const labels = [...countries.map((country: Country) => `${country.entity} ${country.flag}`)];

    const data = {
        labels,
        backgroundColor: "#212121",
        datasets: [
            {
                label: 'Population',
                data: [...countries.map((country: Country) => country.population)],
                backgroundColor: '#4283e3b5',
            },
            {
                label: 'CO2 Emissions',
                data: [...countries.map((country: Country) => country.co2)],
                backgroundColor: '#d11d1deb',
            },
        ],
    };

    return (
        <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            {loading && !error ? <Spinner /> : <Bar options={options} data={data} />}
        </Container>
    );
}

export default VerticalBarChart