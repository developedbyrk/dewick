import React from 'react'
import Services from './ServicesData'

const OurServices = () => {

    return (
        <>
            <h1 className="fw-bold text-secondary text-center">OUR SERVICES</h1>
            <div className="d-flex flex-wrap justify-content-between pt-4 pb-5 mb-md-5 mb-0">
                {
                    Services.map((item) => {
                        return <div className="bg-light border border-secondary p-5 mb-4 d-flex flex-column justify-content-center align-items-center services-item" key={item.title}>
                            <figure>
                                {item.image}
                            </figure>
                            <h3 className="fw-bold text-secondary">{item.title}</h3>
                            <p className="h6 fw-light text-start py-3" style={{ lineHeight: 1.5 }}>
                                {item.details}
                            </p>
                            <button className="btn btn-success fw-bold px-4 py-2 rounded-pill text-white">{item.btn}</button>
                        </div>
                    }
                    )
                }
            </div>
        </>
    )
}

export default OurServices
