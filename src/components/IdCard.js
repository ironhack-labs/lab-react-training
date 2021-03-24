import React from 'react';
import { bDay } from '../assets/helpers/helperDates'
import '../assets/css/IdCard.scss'

const IdCard = ({ lastName, firstName, gender, height, birth, img }) => {
    return(
        <div className="IdCard">
        <div>
            <img src={img.src} alt={img.alt}/>
        </div>
        <div>
            <ul>
                <li className="name">{ lastName }, { firstName }</li>
                <li><b>Gender</b>: { gender }</li>
                <li><b>Height</b>: { height }</li>
                <li><b>Birth</b>: { bDay(birth) }</li>
            </ul>
        </div>
        </div>
    )
}

export default IdCard