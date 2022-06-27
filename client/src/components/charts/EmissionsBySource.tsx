import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Spinner } from '..';
import { useEmissionSources } from '../../hooks';

ChartJS.register(ArcElement, Tooltip, Legend);

const EmissionsBySource = () => {
    const { loading, sources, error } = useEmissionSources();

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Emissions By Source: ${sources?.year}`,
            },
        },
    };

    const data = {
        labels: ["Coal", "Cement", "Flaring", "Gas", "Oil", "Other"],
        datasets: [
            {
                label: 'Emissions By Source',
                data: [sources?.coal, sources?.flaring, sources?.gas, sources?.oil, sources?.other],
                backgroundColor: [
                    'rgba(215, 38, 61, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(89, 98, 76, 0.2)',
                ],
                borderColor: [
                    'rgba(215, 38, 61, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(89, 98, 76, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <>
        {loading && !error ? <Spinner /> : <Doughnut data={data} options={options} />}
    </>;
}

export default EmissionsBySource
