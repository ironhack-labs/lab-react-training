import React from 'react';

const IdCard = ({lastName,firstName,gender,height,birth,picture}) => (
    <div className="idCard">
        <div className="picture">
            <img src={picture} />
        </div>
        <div className="personalData">
            <div><span className="data">First Name: </span><span>{firstName}</span></div>
            <div><span className="data">Last Name: </span><span>{lastName}</span></div>
            <div><span className="data">Gender: </span><span>{gender}</span></div>
            <div><span className="data">Height: </span><span>{height}</span></div>
            <div><span className="data">Birth: </span><span>{birth}</span></div>
        </div>
    </div>
)

export default IdCard;