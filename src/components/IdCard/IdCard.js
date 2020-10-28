import React from 'react';
import './IdCard.css'

const handleBirth = (date) => {
    const returnString = date.toUTCString().split(' ').splice(0, 4);
    returnString[0] = returnString[0].split('').splice(0, 3).join('');
    return returnString.join(' ');
}

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="card-container">
            <img src={picture} alt="generic stock"/>
            <div className="info">
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{`${height/100}m`}</p>
                <p><strong>Birth: </strong>{handleBirth(birth)}</p>
            </div>
        </div>
    );
}

export default IdCard;