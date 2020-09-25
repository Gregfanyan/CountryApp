import { useState, useEffect } from 'react'

export default function useCountries(search: string) {
  const [data, setData] = useState([])
  const [savedCountries, setSavedCountries] = useState([])
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
