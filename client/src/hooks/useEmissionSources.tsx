import axios from 'axios';
import React from 'react'
import { SourceType } from '../types';

const useEmissionSources = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [sources, setSources] = React.useState<SourceType>();

    React.useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                const { data: { data } } = await axios.get("http://localhost:8000/world");
                const { year, cumulative_coal_co2, cumulative_cement_co2, cumulative_flaring_co2, cumulative_gas_co2, cumulative_oil_co2, cumulative_other_co2 } = data[0];
                setSources({
                    "year": year,
                    "coal": cumulative_coal_co2,
                    "cement": cumulative_cement_co2,
                    "flaring": cumulative_flaring_co2,
                    "gas": cumulative_gas_co2,
                    "oil": cumulative_oil_co2,
                    "other": cumulative_other_co2,
                })
            } catch (e) {
                setError(!!e);
            }

            setLoading(false);
        })()
    }, [])

    return { loading, error, sources }
}

export default useEmissionSources