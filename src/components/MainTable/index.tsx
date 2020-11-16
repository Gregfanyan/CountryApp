import React from 'react'

import Header from '../Header'
import TableRow from '../TableRow'

import './mainTable.scss'

export default function MainTable({ countries, setActiveFilter }: any) {
    return (
        <div>
            <Header setActiveFilter={setActiveFilter} />

            <table className="table">
                <tbody className="tableBody">
                    {countries &&
                        countries.map((country?: any) => (
                            <TableRow key={country.name} countries={country} />
                        ))}
                </tbody>
            </table>
        </div>
    )
}
