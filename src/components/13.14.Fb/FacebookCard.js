import React from 'react'
import './Facebook.scss'

const FacebookCard = ({ firstName, lastName, country, img, isStudent }) => {
    const alumni = (b) => {
        return b ? 'Student' : 'Alumni'
    }

    return (
        <div className="FacebookCard">
            <div>
            <img src={img} alt={firstName}/>
        </div>
        <div>
            <ul>
                <li className="nameFB">{ lastName }, { firstName }</li>
                <li><b>{ alumni(isStudent) }</b></li>
                <li>Country: { country }</li>
            </ul>
        </div>
        </div>
    )
}

export default FacebookCard
