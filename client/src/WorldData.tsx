import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

// cumulative_co2: 1696524.177
const SourceTypes = {
    cumulative_coal_co2: "Coal",
    cumulative_flaring_co2: "Flaring",
    cumulative_gas_co2: "Gas",
    cumulative_oil_co2: "Oil",
    cumulative_other_co2: "Other",
}


const WorldData = () => {
    const [sources, setSources] = React.useState<{
        "coal": string,
        "cement": string,
        "flaring": string,
        "gas": string,
        "oil": string,
        "other": string,
    }>();

    React.useEffect(() => {
        (async () => {
            try {
                const { data: { data } } = await axios.get("http://localhost:8000/world");
                setSources({
                    "coal": data[0].cumulative_coal_co2,
                    "cement": data[0].cumulative_cement_co2,
                    "flaring": data[0].cumulative_flaring_co2,
                    "gas": data[0].cumulative_gas_co2,
                    "oil": data[0].cumulative_oil_co2,
                    "other": data[0].cumulative_other_co2,
                })
            } catch (error) {
                console.log("error :>>> ", error);
            }
        })()
    }, [])

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Emissions By Source',
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
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(89, 98, 76, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
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
    return <Doughnut data={data} options={options} />;
}

export default WorldData
