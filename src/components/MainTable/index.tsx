import React, { FunctionComponent } from 'react'

import Header from '../Header'
import TableRow from '../TableRow'
import Pagination from '../Pagination'

import './mainTable.scss'
import { Country } from '../../types/CountryType'

const MainTable: FunctionComponent<{
    currentCountry: Country[]
    currentPage: number | null
    countryPerPage: number
    countries: Country[]
    paginate: (pageNumber: number) => void
    setActiveFilter: Function
}> = ({
    currentCountry,
    currentPage,
    countryPerPage,
    countries,
    paginate,
    setActiveFilter,
}) => {
    return (
        <div>
            <table>
                <thead>
                    <Header setActiveFilter={setActiveFilter} />
                </thead>
                <tbody>
                    {currentCountry &&
                        currentCountry.map((country: Country, i: number) => (
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

export default MainTable
