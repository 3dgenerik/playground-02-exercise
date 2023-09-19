import { getCountry, getRegionCountries, highDencePopulation, IHighDenceCountry } from "../index-01";

it('getCountry("Serbia") basics data', async () => {
    const basicDetails = await getCountry("Serbia")
    expect(basicDetails).toEqual({capital: 'Belgrade',region: 'Europe',population: 6.908224,borders: 8})
})

it('getReginaCountries("Europe") countries', async()=>{
    const countries = await getRegionCountries("Europe")
    expect(countries.length).toEqual(53)
})

it('highDencePopulation() overall world population', async()=>{
    const population = await highDencePopulation()
    expect(population.reduce((acc: number, elem: IHighDenceCountry)=>acc+elem.population,0)).toBeGreaterThanOrEqual(7)
})