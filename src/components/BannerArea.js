import React from 'react'
import BannerImage from '../images/hero_default.jpeg'

const BannerArea = ({ bannerTitle }) => {
    //Check index.css for styling
    return (
        <div className="banner position-relative" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="container py-5">
                <h1 className="text-center fw-bold py-5 text-white position-relative">{bannerTitle}</h1>
            </div>
        </div>
    )
}

export default BannerArea
