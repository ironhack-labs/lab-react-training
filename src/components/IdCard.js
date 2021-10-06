import React from 'react'

function idCard(props) {
    const {firstName, lastName, gender, height, birth, picture} = props

    return (
        <>
        <p className="firstName"><strong>First Name:</strong>{firstName}</p>
        <p className="lastName"><strong>Last Name:</strong> {lastName}</p>
        <p className="gender"><strong>Gender:</strong> {gender}</p>
        <p className="height"><strong>Height:</strong> {height/100} mts.</p>
        <p className="birth"><strong>Birthday:</strong> {birth.toLocaleDateString()}</p>
        <img className="picture" src={picture} alt="img-person"/>

        </>
    )
}

export default idCard
