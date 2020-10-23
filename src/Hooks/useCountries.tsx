import { useState, useEffect } from 'react'

export default function useCountries(search: string, activeFilter: string) {
  const [data, setData] = useState<any[]>([])
  const [savedCountries, setSavedCountries] = useState<any[]>([])
  const fetchData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        setSavedCountries(result)
      })
      .catch((err) => console.log('error'))
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

  return [data]

}
