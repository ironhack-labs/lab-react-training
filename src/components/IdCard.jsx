import React from 'react'

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props
    const date = new Date(birth).toDateString

    return (
        <div>
            <img src={picture} alt='pic' />
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {date}</p>
        </div>
    )
}

export default IdCard;