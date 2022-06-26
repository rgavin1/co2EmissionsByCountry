import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const data = {
    datasets: [
        {
            label: 'Red dataset',
            data: Array.from({ length: 10 }, () => ({
                x: [100, 0, 80],
                y: [100, 0, 80],
                r: [1000000, 900, 80],
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Blue dataset',
            data: Array.from({ length: 10 }, () => ({
                x: [200, 8, 30],
                y: [200, 8, 30],
                r: [20343, 8324, 230230],
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const BubbleChart = () => {
    return <Bubble options={options} data={data} />;
}

export default BubbleChart