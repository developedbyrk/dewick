import React, { useState, useRef } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Accordion = (props) => {

    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0px')
    const [setRotate, setRotateState] = useState('accordion__icon')

    const content = useRef(null)

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate")
    }

    return (
        <div className="accordion__section border-top lh-lg">
            <div style={{ boxShadow: 'none !important' }} onClick={toggleAccordion}
                className={`accordion bg-white d-flex w-100 justify-content-between pt-3 px-4 fw-bold fs-5 ${setActive}`}>
                <p className="accordion__title">{props.title}</p>
                <span className={`${setRotate}`}><ExpandMoreIcon className="down" /><ExpandLessIcon className="up" /></span>
            </div>
            <div className="accordion__content bg-light" ref={content} style={{ maxHeight: `${setHeight}` }}>
                <div className="accordion__text p-4" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
        </div>
    )
}

export default Accordion
