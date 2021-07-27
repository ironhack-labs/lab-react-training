import React from 'react';
import "./IdcCards.css";
import "../../App.css";

function IdCard(props) {
    return (
        <div className='idCard'>
            <img src={props.picture} alt="pic id"/>
            <div>
                <p><b>First name:</b> {props.firstName} </p>
                <p><b>Last name:</b> {props.lastName} </p>
                <p><b>Gender:</b>   {props.gender} </p>
                <p><b>Height:</b>   {props.height} </p>
                <p><b>Birth:</b>     {props.birth.toDateString().slice(3)}</p>
            </div>

        </div>
    );
}

export default IdCard;