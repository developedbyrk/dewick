import React from 'react'

const PaginationNumber = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="d-flex gap-2 justify-content-center py-4">
            {pageNumbers.map(number => (
                <div key={number} className="rounded-pill border border-success">
                    <p onClick={() => paginate(number)} className="mb-0 px-3 py-2" style={{ cursor: 'pointer' }}>
                        {number}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default PaginationNumber
