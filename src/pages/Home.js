import React from 'react';
import BannerArea from '../components/home/Banner';
import HomeLocation from '../components/home/HomeLocation';
import OurServices from '../components/home/OurServices';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import "../styles/Home.css"

const Home = () => {

    return (
        <>
            <div className="container pb-3">
                <BannerArea />
                <HomeLocation />
                <OurServices />
            </div>
            <FeaturedProjects />
            <TestimonialsSlider />
        </>
    )
}

export default Home
