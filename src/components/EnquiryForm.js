import React, { useState } from 'react'

const EnquiryForm = () => {
    const [inputValue, setInputValue] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: ""
    })

    const inputEvent = (e) => {
        const { value, name } = e.target

        setInputValue((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const onSubmits = (e) => {
        e.preventDefault();
        // alert(`Submitted Details:- ${inputValue.Name}, ${inputValue.Email}, ${inputValue.Phone}, ${inputValue.Message}`)
    }

    return (
        <div className="col-md-6 col-12">
            <h3 className="fw-bold pb-3 text-secondary pt-5 pt-md-0">Enquiry Form</h3>
            <form className="d-flex flex-column gap-4" onSubmit={onSubmits}>
                <input type="text" name='Name' value={inputValue.Name} placeholder="Name" className="form-control rounded-pill py-2 bg-light" onChange={inputEvent} />
                <input type="email" name='Email' value={inputValue.Email} placeholder="Email" className="form-control rounded-pill py-2 bg-light" onChange={inputEvent} />
                <input type="number" name='Phone' value={inputValue.Phone} placeholder="Phone" className="form-control rounded-pill py-2 bg-light" onChange={inputEvent} />
                <textarea rows="7" name='Message' value={inputValue.Message} placeholder="Message" className="form-control rounded-3 py-2 bg-light" onChange={inputEvent}></textarea>
                <input type="submit" value="Submit" className="btn btn-success rounded-pill btn-lg text-uppercase" />
            </form>
        </div>
    )
}

export default EnquiryForm
