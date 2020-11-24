import React from 'react';
import './IdCard.css';

function IdCard(props){
    return(
        <div className = "profile">
        <img className="picture" src={props.picture} alt="Face" />
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.birth}</p>
        </div>
    );
}

export default IdCard;