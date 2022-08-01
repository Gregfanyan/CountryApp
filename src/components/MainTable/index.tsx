import React from 'react'

import Header from '../Header'
import TableRow from '../TableRow'
import Pagination from '../Pagination'

import './mainTable.scss'

export default function MainTable({
    currentCountry,
    currentPage,
    countryPerPage,
    countries,
    paginate,
    setActiveFilter,
}: any) {
    return (
        <div>
            <table>
                <thead>
                    <Header setActiveFilter={setActiveFilter} />
                </thead>
                <tbody>
                    {currentCountry &&
                        currentCountry.map((country: any, i: number) => (
                            <TableRow key={i} countries={country} />
                        ))}
                </tbody>
            </table>
            <Pagination
                countryPerPage={countryPerPage}
                totalCountries={countries?.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    )
}
