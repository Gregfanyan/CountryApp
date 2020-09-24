import React, { useContext, useEffect } from 'react'
import Header from '../Header'
import TableRow from '../TableRow'
import ThemeContext from '../../useContext/context'

import './mainTable.scss'

export default function MainTable({ countries }: any) {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const body = document.getElementsByTagName('body')
    body[0].style.backgroundColor = theme.foreground
  }, [theme.foreground])

  return (
    <div>
      <Header />

      <table className="table">
        <tbody className="tableBody">
          {countries &&
            countries.map((country?: any) => (
              <TableRow
                key={country.name}
                flagUrl={country.flag}
                countryName={country.name}
                languages={country.languages}
                population={country.population}
                region={country.region}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}
