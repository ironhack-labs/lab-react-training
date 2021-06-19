import React from 'react';

const IdCard = ({lastName,firstName,gender,height,birth,picture}) => (
    <div className="idcard">
        <img src={picture} />
        <div className="textCard">
        <span>last name:{lastName}</span>
        <span>first name:{firstName}</span>
        <span>gender:{gender}</span>
        <span>height:{height}</span>
        <span>birth:{birth}</span>
        </div>
    </div>
)

export default IdCard;