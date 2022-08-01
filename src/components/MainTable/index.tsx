import React, { FunctionComponent } from 'react'

import Header from '../Header'
import TableRow from '../TableRow'
import Pagination from '../Pagination'

import './mainTable.scss'

const MainTable: FunctionComponent<{
    currentCountry: any
    currentPage: any
    countryPerPage: any
    countries: any
    paginate: any
    setActiveFilter: any
}> = ({
    currentCountry,
    currentPage,
    countryPerPage,
    countries,
    paginate,
    setActiveFilter,
}: any) => {
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

export default MainTable
