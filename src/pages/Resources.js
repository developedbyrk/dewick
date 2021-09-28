import React from 'react'
import BannerArea from '../components/BannerArea'
import { Link } from 'react-router-dom'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const Resources = () => {
    const documents = [
        {
            id: 1,
            docName: 'Dewick & Associates - Flow Chart',
            link: '#'
        },
        {
            id: 2,
            docName: 'Dewick & Associates - Frequently Asked Questions',
            link: '#'
        },
        {
            id: 3,
            docName: 'Dewick & Associates - Capability Statement Australia',
            link: '#'
        },
        {
            id: 4,
            docName: 'Dewick & Associates - Capability Statement UK',
            link: '#'
        }
    ]
    return (
        <>
            <BannerArea bannerTitle="Company Documents" />
            <div className="container py-5 sh">
                <div className="row gx-5 py-5">
                    <div className="col-lg-9 col-12 pe-lg-5">
                        <h2 className="fw-bold text-secondary pb-lg-5 pb-3 border-bottom">Company Documents</h2>
                        {
                            documents.map(doc => {
                                const { id, docName, link } = doc;
                                return <div className="border-bottom d-flex p-4" key={id}>
                                    <PictureAsPdfIcon className="text-secondary fs-2" />
                                    <Link to={link} className="fw-bold fs-6 text-decoration-none link-secondary ps-4">{docName}</Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources
