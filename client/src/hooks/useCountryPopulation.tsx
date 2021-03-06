import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { CountryWithFlag } from '../helper';
import { Country } from '../types';

const useCountryPopulation = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState<any[]>([]);
    const [selectedCountries, setSelectedCountries] = React.useState<any[]>([]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`http://localhost:8000/country_population/2020`);
                const restructedList = data.result.filter((country: Country) => country.entity !== "World")
                const countriesData: Country[] = restructedList.map((country: Country) => ({ co2: country.co2, code: country.code, entity: country.entity, id: country.id, population: country.population, year: country.year, flag: CountryWithFlag[country.entity]?.flag }));
                setCountries(countriesData);
            } catch (e) {
                setError(!!e);
            }
            setLoading(false);
        })()
    }, [])

    const userSelectedCountries = (country: any) => {
        setSelectedCountries(country);
    }

    return { loading, countries, selectedCountries, userSelectedCountries, error };
}

export default useCountryPopulation