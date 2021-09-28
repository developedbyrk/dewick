import React from 'react'
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import S1 from "./images/s1.png"
import S2 from "./images/s2.jpeg"
import S3 from "./images/s3.jpeg"
import Testimonials from "./images/testimonials.jpeg"

const TestimonialsSlider = () => {

    const slides = [
        {
            thumb: <img src={S1} alt="Slide1" />,
            text: 'Great team to deal with. Willing to go above and beyond to help out on our manuals when a quick turn around time is required. Very professional team.',
            name: 'David Martin – Smart Tech Electrical'
        },
        {
            thumb: <img src={S2} alt="Slide2" />,
            text: 'Dewick have been very helpful to our company on numerous projects, I\'ve always found the handover documentation at the end of a project onerous and time consuming and believe my time is more valuable focusing on the next project, I can recommend Dewick, they are prompt, professional and cost effective in my opinion.',
            name: 'Paul Graham – AsBuild NT - AS Built NT'
        },
        {
            thumb: <img src={S3} alt="Slide3" />,
            text: '"I’ve got to be honest, I’m very happy because I haven’t had to worry about it – it’s a service I will definitely look to use again and I’ll give your contact to the other PMs if they are looking to get the manuals done."',
            name: 'Mark Mulrooney – Climatech'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="py-3 py-md-5 bg-secondary" style={{ background: `url(${Testimonials})`, backgroundSize: 'cover' }}>
            <div className="container text-white text-center pt-3 pt-md-5">
                <Slider {...settings}>
                    {
                        slides.map((slide, ind) => {
                            return <figure key={ind}>
                                <p>{slide.thumb}</p>
                                <blockquote className="blockquote px-3">
                                    <p className="fs-3 fst-italic fw-light my-3 my-md-5">{slide.text}</p>
                                    <figcaption className="blockquote-footer fst-italic text-white fw-light">{slide.name}</figcaption>
                                </blockquote>
                            </figure>
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default TestimonialsSlider
