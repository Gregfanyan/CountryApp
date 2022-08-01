import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Country, AppState } from '../types/CountryType'
import { fetchCountries } from '../redux/Countries/CountryActions'

export default function useCountries(search: string, activeFilter: string) {
    const [data, setData] = useState<Country[]>([])
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
        const result = [...countries].filter((item: Country) =>
            item.name.official.toLowerCase().includes(search.toLowerCase())
        )
        setData(result)
    }, [countries, search])

    useEffect(() => {
        const sortCountry = (countries: Country[]) => {
            const filter = activeFilter.toLowerCase()
            switch (filter) {
                case 'flag':
                    const sortByFlag = [...countries].sort((a, b) =>
                        a.flags.png.localeCompare(b.flags.png)
                    )
                    setData(sortByFlag)
                    break
                case 'region':
                    const sortByRegion = [...countries].sort((a, b) =>
                        a.region.localeCompare(b.region)
                    )
                    setData(sortByRegion)
                    break
                case 'language':
                    const sortByLanguage =
                        countries &&
                        [...countries].sort((a, b) => {
                            const languageA = Object.values(
                                a.languages || {}
                            )[0] as string

                            const languageB = Object.values(
                                b.languages || {}
                            )[0] as string

                            if (languageA < languageB) {
                                return -1
                            }
                            if (languageA > languageB) {
                                return 1
                            }
                            return 0
                        })
                    setData(sortByLanguage)
                    break
                case 'population':
                    const sortPopulation = [...countries].sort(
                        (a, b) => a.population - b.population
                    )
                    setData(sortPopulation)
                    break
                case 'name':
                    const sortByName = [...countries].sort((a, b) =>
                        b.name.official.localeCompare(a.name.official)
                    )
                    setData(sortByName)
                    break
                default:
                    const sortByNames = [...countries].sort((a, b) =>
                        a.name.official.localeCompare(b.name.official)
                    )
                    setData(sortByNames)
            }
        }

        setData(sortCountry as unknown as Country[])
    }, [activeFilter, countries])

    return [data]
}
