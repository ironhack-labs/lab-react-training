import React from 'react';

function IdCard({ lastName, firstName, gender,heigth,birth,picture }) {
    return (
        <div>
             <div>
                <img src={picture} alt="" />
            </div>
                        <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <p>{gender}</p>
            <p>{heigth}</p>
            <p>{birth}</p>
           
           
        </div>
    )
}

export default IdCard