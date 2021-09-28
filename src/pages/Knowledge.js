import React from 'react'
import BannerArea from '../components/BannerArea'
import Pagination from '../PaginationTut/Pagination'

const Knowledge = () => {
    return (
        <>
            <BannerArea bannerTitle="Articles" />
            <div className="container py-5 sh">
                <Pagination />
            </div>
        </>
    )
}

export default Knowledge
