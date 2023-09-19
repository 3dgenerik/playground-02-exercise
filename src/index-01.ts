import axios from "axios";

interface IRegion {
    name:{
        common: string,
        official: string,
    },
    independent: boolean,
    capital: string,
    region: string,
    subregion: string,
    languages: {
        ron: string
    },
    population: number,
    borders:string[],
    currencies:{
        [key:string]:{
            name: string,
            symbol: string
        }
    }
}

interface ICountry extends IRegion{

}

interface ICountryDetail{
    capital: string,
    region: string,
    population: number,
    borders:number
}

export const getCountry = async (countryName: string) => {
    const getApi = await axios(`https://restcountries.com/v3.1/name/${countryName}`)
    const data = getApi.data[0] as ICountry;
    
    const countryDetail: ICountryDetail = {
        capital:data.capital[0],
        region:data.region,
        population:data.population/1000000,
        borders: data.borders.length
    }
    console.log(countryDetail);
    return countryDetail
}


export const getRegionCountries = async (region: string):Promise<string[]> => {
    const getApi = await axios(`https://restcountries.com/v3.1/region/${region}`)
    const data = getApi.data as IRegion[]
    const countries = []
    for (const country of data) {
        const countryName = country.name.common
        countries.push(countryName)
    }
    return countries
}

export interface IHighDenceCountry{
    name: string;
    population:number
}

export const highDencePopulation = async (): Promise<IHighDenceCountry[]> => {
    const getApi = await axios('https://restcountries.com/v3.1/all')
    const data = getApi.data as ICountry[];
    const highDenceCountries:IHighDenceCountry[] = []
    for (const country of data) {
        const populationInMil = country.population/1000000000;
        highDenceCountries.push({name: country.name.common, population: populationInMil})
    }

    return highDenceCountries;
}


