import React from 'react';

const IdCard = (props) => {
    return (
        <div className="IdCard">
            <img src={props.picture} alt="Profile picture"/>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth}</p>
        </div>
    );
}

export default IdCard
