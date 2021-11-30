import React from 'react';


const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture} = props
    return (
        <div className="idCard">
            <p>Last name: {lastName}</p>
            <p>Name: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toDateString()}</p>
            <img src={picture} alt={firstName + lastName}></img>
        </div>
    )
}

export default IdCard