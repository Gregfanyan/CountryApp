import React from 'react'

import Header from '../Header'
import TableRow from '../TableRow'

import './mainTable.scss'

import { MainTableProps } from '../../types'

export default function MainTable({
  countries,
  setActiveFilter,
}: MainTableProps) {
  return (
    <div>
      <Header setActiveFilter={setActiveFilter} />

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
