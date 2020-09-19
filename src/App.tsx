import React, { useState } from 'react'

import SearchBar from './components/SearchBar'
import useCountries from './Hooks/useCountries'
import MainTable from './components/MainTable'
import ThemeButton from './useContext/ThemedButton'
import ThemeContext from './useContext/context'

import { searchProps } from './types'
import { themes } from './useContext/context'
import Routes from './Routes'

import './App.scss'

export default function App() {
  const [search, setSearch] = useState('')
  const [data] = useCountries(search)
  const [context, setContext] = useState({
    theme: themes.light,
    switchTheme: () => {
      setContext((current) => ({
        ...current,
        theme: current.theme === themes.light ? themes.dark : themes.light,
      }))
    },
  })

  const handleChange: React.ReactEventHandler<HTMLInputElement> = (e): void => {
    setSearch(e.currentTarget.value)
  }

  return (
    <div className="App" style={{ backgroundColor: context.theme.foreground }}>
      <SearchBar handleChange={handleChange} search={search as searchProps} />

      <ThemeContext.Provider value={context}>
        <ThemeButton />
        <MainTable countries={data} />
      </ThemeContext.Provider>

      <Routes />
    </div>
  )
}
