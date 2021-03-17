import React from 'react';
import helperDates, { bDay } from '../assets/helpers/helperDates'
import '../assets/css/IdCard.scss'

const IdCard = ({ lastName, firstName, gender, height, birth, img }) => {
    return(
        <div class="IdCard">
        <div>
            <img src={img.src} alt={img.alt}/>
        </div>
        <div>
            <ul>
                <li><b>Last name</b>: { lastName }</li>
                <li><b>First name</b>: { firstName }</li>
                <li><b>Gender</b>: { gender }</li>
                <li><b>Height</b>: { height }</li>
                <li><b>Date of birth</b>: { bDay(birth) }</li>
            </ul>
        </div>
        </div>
    )
}

export default IdCard