import React from 'react';

function IdCard({firstName, lastName, gender, height, birth, imageUrl}) {
    return (
        <>
    <h1>{firstName}</h1>
    <h1>{lastName}</h1>
    <h1>{gender}</h1>
    <h1>{height}</h1>
    <h1>{birth}</h1>
    <img src={imageUrl} alt="profile pic" />
    
    
        </>
    );
    }
    
    export default IdCard;