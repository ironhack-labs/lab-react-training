import React from 'react';

const IdCard = props => {
    return (
        <div className="card">
            <img alt="" className="card-image" src={props.picture} />
            <div className="card-info">
                <p>First Name: <span>{props.firstName}</span></p>
                <p>Last Name: <span>{props.lastName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height: <span>{props.height}</span></p>
                <p>Birth: <span>{props.birth.toDateString()}</span></p>
            </div>
        </div>
    )
};

export default IdCard;