import React from 'react'

const Idcard = ({ lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div>
            <img src={picture} alt={firstName} width='100'/>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth}</p>
        </div>
    )
}

export default Idcard
