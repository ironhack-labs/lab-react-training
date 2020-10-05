import React from 'react';

const IdCard = (props) => {
    return (
        <div>
        <h1>ID CARD</h1>
            <ul>
                <li><img src={props.picture} alt=""/></li>
                <li> First name: {props.firstName}</li>
                <li> Last name: {props.lastName}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Birth: {props.birth.toString()}</li>
            </ul>  
        </div>
    )
}

export default IdCard;
