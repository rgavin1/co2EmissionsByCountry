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

const exampleData = [
    { "id": 50, "year": 1929, "temp_celsius": - 0.32 },
    { "id": 51, "year": 1930, "temp_celsius": - 0.18 },
    { "id": 52, "year": 1931, "temp_celsius": - 0.14 },
    { "id": 53, "year": 1932, "temp_celsius": - 0.16 },
    { "id": 54, "year": 1933, "temp_celsius": - 0.23 },
    { "id": 55, "year": 1934, "temp_celsius": - 0.06 },
    { "id": 56, "year": 1935, "temp_celsius": - 0.22 },
    { "id": 57, "year": 1936, "temp_celsius": - 0.11 },
    { "id": 58, "year": 1937, "temp_celsius": - 0.02 },
    { "id": 59, "year": 1938, "temp_celsius": - 0.03 },
    { "id": 60, "year": 1939, "temp_celsius": - 0.02 },
    { "id": 61, "year": 1940, "temp_celsius": 0.14 },
    { "id": 62, "year": 1941, "temp_celsius": 0.28 },
    { "id": 63, "year": 1942, "temp_celsius": 0.14 },
    { "id": 64, "year": 1943, "temp_celsius": 0.1 },
    { "id": 65, "year": 1944, "temp_celsius": 0.25 },
    { "id": 66, "year": 1945, "temp_celsius": 0.18 },
    { "id": 67, "year": 1946, "temp_celsius": - 0.02 },
    { "id": 68, "year": 1947, "temp_celsius": - 0.01 },
    { "id": 69, "year": 1948, "temp_celsius": 0.07 },
    { "id": 70, "year": 1949, "temp_celsius": - 0.02 },
    { "id": 71, "year": 1950, "temp_celsius": - 0.04 },
    { "id": 72, "year": 1951, "temp_celsius": 0.07 },
    { "id": 73, "year": 1952, "temp_celsius": 0.05 },
    { "id": 74, "year": 1953, "temp_celsius": 0.18 },
    { "id": 75, "year": 1954, "temp_celsius": - 0.17 },
    { "id": 76, "year": 1955, "temp_celsius": - 0.14 },
    { "id": 77, "year": 1956, "temp_celsius": - 0.24 },
    { "id": 78, "year": 1957, "temp_celsius": 0.13 },
    { "id": 79, "year": 1958, "temp_celsius": 0.09 },
    { "id": 80, "year": 1959, "temp_celsius": 0.06 },
    { "id": 81, "year": 1960, "temp_celsius": - 0.05 },
    { "id": 82, "year": 1961, "temp_celsius": 0.17 },
    { "id": 83, "year": 1962, "temp_celsius": 0.07 },
    { "id": 84, "year": 1963, "temp_celsius": 0.04 },
    { "id": 85, "year": 1964, "temp_celsius": - 0.09 },
    { "id": 86, "year": 1965, "temp_celsius": - 0.08 },
    { "id": 87, "year": 1966, "temp_celsius": - 0.04 },
    { "id": 88, "year": 1967, "temp_celsius": 0.15 },
    { "id": 89, "year": 1968, "temp_celsius": - 0.09 },
    { "id": 90, "year": 1969, "temp_celsius": 0.19 },
    { "id": 91, "year": 1970, "temp_celsius": 0.05 },
    { "id": 92, "year": 1971, "temp_celsius": - 0.07 },
    { "id": 93, "year": 1972, "temp_celsius": 0.02 },
    { "id": 94, "year": 1973, "temp_celsius": 0.23 },
    { "id": 95, "year": 1974, "temp_celsius": - 0.02 },
    { "id": 96, "year": 1975, "temp_celsius": 0.08 },
    { "id": 97, "year": 1976, "temp_celsius": - 0.12 },
    { "id": 98, "year": 1977, "temp_celsius": 0.26 },
    { "id": 99, "year": 1978, "temp_celsius": 0.08 },
    { "id": 100, "year": 1979, "temp_celsius": 0.17 },
    { "id": 101, "year": 1980, "temp_celsius": 0.37 },
    { "id": 102, "year": 1981, "temp_celsius": 0.27 },
    { "id": 103, "year": 1982, "temp_celsius": 0.21 },
    { "id": 104, "year": 1983, "temp_celsius": 0.31 },
    { "id": 105, "year": 1984, "temp_celsius": 0.31 },
    { "id": 106, "year": 1985, "temp_celsius": 0.21 },
    { "id": 107, "year": 1986, "temp_celsius": 0.26 },
    { "id": 108, "year": 1987, "temp_celsius": 0.36 },
    { "id": 109, "year": 1988, "temp_celsius": 0.41 },
    { "id": 110, "year": 1989, "temp_celsius": 0.28 },
    { "id": 111, "year": 1990, "temp_celsius": 0.47 },
    { "id": 112, "year": 1991, "temp_celsius": 0.4 },
    { "id": 113, "year": 1992, "temp_celsius": 0.32 },
    { "id": 114, "year": 1993, "temp_celsius": 0.35 },
    { "id": 115, "year": 1994, "temp_celsius": 0.4 },
    { "id": 116, "year": 1995, "temp_celsius": 0.37 },
    { "id": 117, "year": 1996, "temp_celsius": 0.39 },
    { "id": 118, "year": 1997, "temp_celsius": 0.42 },
    { "id": 119, "year": 1998, "temp_celsius": 0.7 },
    { "id": 120, "year": 1999, "temp_celsius": 0.4 },
    { "id": 121, "year": 2000, "temp_celsius": 0.43 },
    { "id": 122, "year": 2001, "temp_celsius": 0.61 },
    { "id": 123, "year": 2002, "temp_celsius": 0.59 },
    { "id": 124, "year": 2003, "temp_celsius": 0.62 },
    { "id": 125, "year": 2004, "temp_celsius": 0.44 },
    { "id": 126, "year": 2005, "temp_celsius": 0.66 },
    { "id": 127, "year": 2006, "temp_celsius": 0.55 },
    { "id": 128, "year": 2007, "temp_celsius": 0.6 },
    { "id": 129, "year": 2008, "temp_celsius": 0.51 },
    { "id": 130, "year": 2009, "temp_celsius": 0.58 },
    { "id": 131, "year": 2010, "temp_celsius": 0.77 },
]


const VerticalBarChartGlobalTemp: React.FC<{ globalTemperatures?: any[]; responsiveness?: boolean; }> = ({ globalTemperatures = exampleData, responsiveness = true }) => {
    const options = {
        responsive: responsiveness,
        maintainAspectRatio: false,
    };

    const labels = [...globalTemperatures.map(temperature => temperature.year)];

    const data = {
        labels,
        backgroundColor: "#212121",
        datasets: [
            {
                label: 'Global Temperatures',
                data: [...globalTemperatures.map(temperature => temperature.temp_celsius)],
                backgroundColor: '#4283e3b5',
            },
        ],
    };

    return <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
        <div style={{ height: "100%", maxHeight: "230px" }}>
            <Bar options={options} data={data} />
        </div>
    </Container>;
}

export default VerticalBarChartGlobalTemp