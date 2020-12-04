import React from 'react'

import './Pagination.scss'

function Pagination({
    countryPerPage,
    totalCountries,
    currentPage,
    paginate,
}: any) {
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
