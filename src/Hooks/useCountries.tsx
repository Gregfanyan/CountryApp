import { useState, useEffect, useMemo } from 'react'

export default function useCountries(search: string, activeFilter: any) {
  const [data, setData] = useState<any[]>([])
  const [savedCountries, setSavedCountries] = useState<any[]>([])
  const fetchData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        setSavedCountries(result)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    const result = [...savedCountries].filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    setData(result)
  }, [search, savedCountries])

  useEffect(() => {
    fetchData()
  }, [])

  const sortCountry = useMemo(
    () => (countries: any) => {
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
          const sortByLanguages = [...countries].sort((a: any, b: any) =>
            a.languages[0].name.localeCompare(b.languages[0].name)
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
            a.name.localeCompare(b.name)
          )
          setData(sortByName)
          break
      }
    },
    [activeFilter]
  )

  useEffect(() => {
    sortCountry(data)
  }, [activeFilter, data, sortCountry])

  return [data]
}
