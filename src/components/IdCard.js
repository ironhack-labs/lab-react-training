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
            <h3>Full name: {firstName} {lastName}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Height: {height} cms</h3>
            <h3>Date of birth: {birth}</h3>
            <img className='IdCardImage' src={picture.src} alt={picture.alt} />
        </div>
    )
}

export default IdCard;