import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Country, AppState } from '../types/CountryType'
import { fetchCountries } from '../redux/Countries/CountryActions'

export default function useCountries(search: string, activeFilter: any) {
    const [data, setData] = useState<any>([])
    const countries = useSelector(
        (state: AppState) => state.countries.countries
    )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
    }, [dispatch])

    useEffect(() => {
        setData(countries)
    }, [countries])

    useEffect(() => {
        const result = [...countries].filter((item: any) =>
            item.name.official.toLowerCase().includes(search.toLowerCase())
        )
        setData(result)
    }, [countries, search])

    useEffect(() => {
        const sortCountry = (countries: Country[]) => {
            const filter = activeFilter.toLowerCase()
            switch (filter) {
                case 'flag':
                    const sortByFlag = [...countries].sort((a: any, b: any) =>
                        a.flag.localeCompare(b.flag)
                    )
                    setData(sortByFlag)
                    break
                case 'region':
                    const sortByRegion = [...countries].sort((a: any, b: any) =>
                        a.region.localeCompare(b.region)
                    )
                    setData(sortByRegion)
                    break
                case 'language':
                    const sortByLanguages = [...countries].sort(
                        (a: any, b: any) =>
                            a.languages[0].name.localeCompare(
                                b.languages[0].name
                            )
                    )
                    setData(sortByLanguages)
                    break
                case 'population':
                    const sortPopulation = [...countries].sort(
                        (a: any, b: any) => a.population - b.population
                    )
                    setData(sortPopulation)
                    break
                case 'name':
                    const sortByName = [...countries].sort((a: any, b: any) =>
                        b.name.localeCompare(a.name)
                    )
                    setData(sortByName)
                    break
                default:
                    const sortByNames = [...countries].sort((a: any, b: any) =>
                        a.name.official.localeCompare(b.name.official)
                    )
                    setData(sortByNames)
            }
        }

        setData(sortCountry)
    }, [activeFilter])

    return [data]
}
