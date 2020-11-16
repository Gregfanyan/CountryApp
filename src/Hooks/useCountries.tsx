import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Product, AppState } from '../types/ProductType'
import { fetchProducts } from '../redux/Products/ProductActions'

export default function useCountries(search: string, activeFilter: any) {
  const [data, setData] = useState<any>([])
  const products = useSelector((state: AppState) => state.products.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    setData(products)
  }, [products])

  useEffect(() => {
    const result = [...products].filter((item: any) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    setData(result)
  }, [products, search])

  const sortCountry = (countries: Product[]) => {
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
  }

  useEffect(() => {
    sortCountry(data)
  })

  return [data]
}
