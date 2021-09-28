import React from 'react'
import { Link } from 'react-router-dom'

export const Posts = ({ posts, loading }) => {

    if (loading) {
        return <h2>Loading ...</h2>;
    }

    return (
        <div className="row">
            {
                posts.map(project => {
                    const { id, link, title, image, detail } = project;
                    return <div className="col-lg-4 col-sm-6 col-12 pb-5" key={id}>
                        <figure className="project-image overflow-hidden">
                            {image}
                        </figure>
                        <h4 className="pt-4 pb-2"><Link to={link} className="text-decoration-none link-dark fw-bold">{title}</Link></h4>
                        <p>{detail} <Link to={link} className="link-success text-decoration-none fw-bold">READ MORE</Link></p>
                    </div>
                })
            }
        </div>
    )
}
