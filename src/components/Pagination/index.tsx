import React, { FunctionComponent } from 'react'

import './Pagination.scss'

const Pagination: FunctionComponent<{
    countryPerPage: number
    totalCountries: number
    currentPage: number | null
    paginate: (pageNumber: number) => void
}> = ({ countryPerPage, totalCountries, currentPage, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= totalCountries / countryPerPage; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            {pageNumbers.map((page) => (
                <div key={page} className="paginatebox">
                    <button
                        className="pageButton"
                        onClick={() => paginate(page)}
                    >
                        {page}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Pagination
