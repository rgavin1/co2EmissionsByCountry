import axios from "axios";
import { useState, useEffect } from "react";

const useYears = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [avaliableYears, setAvaliableYears] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`http://localhost:8000/years`);
                const results: any[] = data.data;
                const years = results.map((result: any) => result.year);
                setAvaliableYears(years);
            } catch (e) {
                setError(!!e);
            }
            setLoading(false);
        })()
    }, [])

    return { loading, error, avaliableYears }
}

export default useYears