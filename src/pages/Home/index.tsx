import React, { useState } from 'react'

import SearchBar from '../../components/SearchBar'
import useCountries from '../../Hooks/useCountries'
import MainTable from '../../components/MainTable'
import Main from '../../ThemeSelector/Main'

import { searchProps } from '../../types'

export default function Home() {
  const [search, setSearch] = useState('')
  const [data] = useCountries(search)
  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e): void => {
    setSearch(e.currentTarget.value)
  }

  return (
    <div>
      <Main />
      <SearchBar handleChange={handleChange} search={search as searchProps} />
      <MainTable countries={data} />
    </div>
  )
}
