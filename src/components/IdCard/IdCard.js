import React from 'react';
import './IdCard.css';


const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture} = props
    return (
        <div className="container">
            <div>
                <img className="IdPic" src={picture} alt={firstName + lastName}></img>
            </div>
            <div className="IdData">
                <p><span>Last name: </span>{lastName}</p>
                <p><span>Name: </span>{firstName}</p>
                <p><span>Gender: </span>{gender}</p>
                <p><span>Height: </span>{height}</p>
                <p><span>Birth: </span>{birth.toDateString()}</p>
            </div>
        </div>
    )


}

export default IdCard