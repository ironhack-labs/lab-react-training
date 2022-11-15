import React from 'react'

function IdCard(props) {
    const { picture, firstName, lastName, gender, height, birth } = props;
    return (
        <div>
            <div><img src={picture} alt="" /></div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toLocaleString().slice(0, 10)}</p>
        </div>
    )
}

export default IdCard