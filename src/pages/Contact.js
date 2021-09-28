import React from 'react'
import BannerArea from '../components/BannerArea'
import NewEnquiries from '../components/NewEnquiries'
import EnquiryForm from '../components/EnquiryForm'

const Contact = () => {
    return (
        <>
            <BannerArea bannerTitle="Contact" />
            <div className="container sh py-5">
                <div className="row py-lg-5 py-0">
                    <NewEnquiries />
                    <EnquiryForm />
                </div>
            </div>
        </>
    )
}

export default Contact
