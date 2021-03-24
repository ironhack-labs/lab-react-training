import React from 'react'
import '../assets/css/Intro.scss'

const Intro = ({ title }) => {
    return (
        <div className="Intro">
            <h1>{ title }</h1>
            <img src="/images/icon.png" alt="Palm Tree" />
        </div>
    )
}

export default Intro;
