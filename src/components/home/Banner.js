import React from 'react'
import Banner from "./images/home_banner.jpeg"

const BannerArea = () => {

    const styles = {
        maxWidth: '95%'
    }

    return (
        <section className="banner-area d-flex justify-content-center">
            <img src={Banner} alt="Dewick Banner" style={styles} />
        </section>
    )
}

export default BannerArea
