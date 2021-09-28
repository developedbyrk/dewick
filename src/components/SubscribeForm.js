import React, { useState } from 'react'

const SubscribeForm = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && details) {
            console.log(title, details);
        } else {
            console.log('Fill the both fields');
        }
    }

    return (
        <div className="bg-success py-5">
            <div className="container d-flex flex-column flex-xl-row">
                <h4 className="w-35 pb-4 pb-xl-0 text-white fw-bold text-center text-xl-start">Subscribe to our email newsletter to receive the latest news and updates</h4>
                <form className="flex-grow-1 d-flex align-items-center" onSubmit={handleSubmit}>
                    <div className="input-group gap-3">
                        <input type="text" placeholder="First Name" name="name" className="form-control rounded-pill py-2 px-4" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="email" placeholder="Email" name="email" className="form-control rounded-pill py-2 px-4" value={details} onChange={(e) => setDetails(e.target.value)} />
                        <input type="submit" value="Subscribe" className="btn btn-secondary btn-lg fs-6 rounded-pill text-uppercase py-2 px-4 fw-bold" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubscribeForm
