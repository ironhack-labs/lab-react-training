import React from 'react';

const IdCard = ({lastName, firstName, gender, height,birth,picture}) => {
    return (
        <div>
            <img src={picture} alt="profile img" />
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{gender}</h4>
            <h4>{height}</h4>
            <h4>{birth.toString()}</h4>
        </div>
    );
};

export default IdCard;