import React from 'react'
import Services from './home/ServicesData'

const AboutProfile = () => {

    return (
        <div className="row">
            {
                Services.map((profile, id) => {
                    return <div className="col-lg-3 col-md-4 col-sm-6 col-12 pt-5" key={id}>
                        <div className="bg-light p-5 text-center">{profile.image}</div>
                        <h4 className="text-success text-center fw-bold py-4 pb-md-0">{profile.title}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default AboutProfile
