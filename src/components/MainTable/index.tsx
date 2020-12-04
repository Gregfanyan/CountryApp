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
            <Header setActiveFilter={setActiveFilter} />

            <table className="table">
                <tbody className="tableBody">
                    {currentCountry &&
                        currentCountry.map((country?: any) => (
                            <TableRow key={country.name} countries={country} />
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
