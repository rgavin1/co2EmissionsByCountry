import React, { useState } from 'react'
import axios from 'axios';
import { GlobalAnnualTemperature } from '../types';

const useTemperatures = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<GlobalAnnualTemperature[]>([]);
    const [error, setError] = useState(false);

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:8000/temperatures");
                const { data } = response.data;
                setData(data);
            } catch (e) {
                setError(!!e);
            }
            setLoading(false)
        })()
    }, [])

    return { loading, data, error };
}

export default useTemperatures;