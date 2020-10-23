import React, { useState } from 'react'

import SearchBar from '../../components/SearchBar'
import useCountries from '../../Hooks/useCountries'
import MainTable from '../../components/MainTable'
import Main from '../../ThemeSelector/Main'

import { searchProps } from '../../types'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Name')
  const [search, setSearch] = useState('')
  const [data] = useCountries(search, activeFilter)
  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.currentTarget.value)
  }
  //  console.log(activeFilter)
  /*   console.log(data.slice(0, 5))
   */
  return (
    <div>
      <Main />
      <SearchBar handleChange={handleChange} search={search as searchProps} />
      <MainTable countries={data} setActiveFilter={setActiveFilter} />
    </div>
  )
}
