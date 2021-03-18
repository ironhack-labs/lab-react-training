import React from 'react';
import '../assets/css/IdCard.css';

const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}) => {
    return (
        <div className='IdCard'>
            <img className='IdCardImage' src={picture.src} alt={picture.alt} />
            <h3>Full name: {firstName} {lastName}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Height: {height} cms</h3>
            <h3>Date of birth: {birth.toDateString()}</h3>
        </div>
    )
}

export default IdCard;