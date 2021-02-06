import React from 'react';

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div>
            <p>{firstName} {lastName} </p>
            <p>{gender}</p>
            <p>{height} </p>
            <p>{birth}</p>
            <img src={picture} alt="pic"/>
        </div>
    );
}

export default IdCard