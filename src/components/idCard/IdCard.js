import React from 'react';
import './IdCard.css'

const genderEnum = {
    female: 'female',
    male: 'male'
}

const IdCard = (
    {
        lastName,
        firstName,
        gender,
        height,
        birth,
        picture
    }
) => {

    const getBirthDate = date => {
        return date.toString().split(' ', 4).join(' ');
    };

    const getGender = gender => genderEnum[gender] ? genderEnum[gender] : 'not-specified';

    const getHeight = height => height/100;

    return(
        <div className="id-card-container">
            <img src={picture} alt={`${firstName} ${lastName} profile`}></img>
            <div>
                <p><span>First name:</span> {firstName}</p>
                <p><span>Last name:</span> {lastName}</p>
                <p><span>Gender:</span> {getGender(gender)}</p>
                <p><span>Heigth:</span> {getHeight(height)}</p>
                <p><span>Birth:</span> {getBirthDate(birth)}</p>
            </div>
        </div>
    );
}

export default IdCard;