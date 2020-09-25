import React from 'react'
import './IdCard.css';

const IdCard = (props) => {
    const {firstName, lastName, gender, height, birth, picture} = props;
    
    return (
        <div className="id-card box">
            <img src={picture} alt={`${firstName} ${lastName}`}/>
            <div className="person-info">
                <p><strong>First name: </strong>{firstName}</p>
                <p><strong>Last name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birth.toString().slice(0, 15)}</p>
            </div>
        </div>
    )
}

export default IdCard;