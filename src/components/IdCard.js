import React from 'react';
import './IdCard.css';

function IdCard (props) {
    return (
        <div className="container" style={{width: "50%"}}>
            <div className="pic">
                <img src={props.picture} width="175" height="150"/>
            </div>
            <div className="details">
                <span>First name: {props.firstName}</span><br/>
                <span>Last name: {props.lastName}</span><br/>
                <span>Gender: {props.gender}</span><br/>
                <span>Height: {props.height} cm</span><br/>
                <span>Birth: {props.birth}</span>
            </div>
        </div>
    )
}
export default IdCard;
