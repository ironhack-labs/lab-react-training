import React from 'react';

function IdCard({firstName, lastName, gender, height, birth, picture}) {
    return (
    <div>
    <p>{firstName} {lastName}</p>
    <p>{gender}</p>
    <p>{height}</p>
    <p>{birth}</p>
    <img src={picture} alt=""/>
    </div>
    )
}

export default IdCard

