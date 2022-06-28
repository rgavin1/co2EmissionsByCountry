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
import { GlobalAnnualTemperature } from '../../types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBarChartGlobalTemp: React.FC<{ globalData: GlobalAnnualTemperature[]; }> = ({ globalData }) => {
    const options = { responsive: true };
    const labels = [...globalData?.map(item => item.year)];

    const data = {
        labels,
        backgroundColor: "#212121",
        datasets: [
            {
                label: 'Global Temperatures',
                data: [...globalData?.map(item => item.temp_celsius)],
                backgroundColor: '#4283e3b5',
            },
        ],
    };

    return (
        <Container style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            <div>
                <Bar options={options} data={data} />
            </div>
        </Container>
    );
}

export default VerticalBarChartGlobalTemp