export type Country = {
    id: string;
    entity: string;
    code: string;
    year: string;
    co2: string;
    population: string;
    flag: string;
}

export type GlobalAnnualTemperature = {
    id: string;
    temp_celsius: number;
    year: string;
}

export type SourceType = {
    "year": string;
    "coal": string,
    "cement": string,
    "flaring": string,
    "gas": string,
    "oil": string,
    "other": string,
}