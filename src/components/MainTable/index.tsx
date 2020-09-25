import React from 'react'

import Header from '../Header'
import TableRow from '../TableRow'

import './mainTable.scss'

export default function MainTable({ countries }: any) {
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
