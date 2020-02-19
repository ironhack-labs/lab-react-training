import React from 'react'

function IdCard({firstName, lastName, gender, height, birth, picture}) {
    
    return (
        <div>
            <img src={picture} alt={firstName} />
            <div>
    <p><b>First name</b>{firstName}</p>
    <p><b>Last name</b>{lastName}</p>
    <p><b>Gender</b>{gender}</p>
    <p><b>Height</b>{height}</p>
    <p><b>Birth</b>{birth}</p>
            </div>
        </div>
    )
}

export default IdCard


