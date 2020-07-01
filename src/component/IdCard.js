import React from 'react';

function IdCard (props) {
    return (
        <div className="card">
                <img src={props.picture} />
            </div>
            <div className="personal">
                <span>First name: {props.firstName}</span>
                <span>Last name: {props.lastName}</span>
                <span>Gender: {props.gender}</span>
                <span>Height: {props.height}</span>
                <span>Birth: {props.birth}</span>
            </div>
    )
}
        
export default IdCard;