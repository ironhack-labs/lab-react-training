import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div>
            <div>
                <img src={picture} alt={lastName}/>
            </div>
            <div>
                <p><strong>First name: </strong>{lastName}</p>
                <p><strong>Last name: </strong>{firstName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birth.toDateString()}</p>
            </div>
        </div>
    );
};

export default IdCard;