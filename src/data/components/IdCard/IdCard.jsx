import React from 'react';
import './IdCard.css';

export default function IdCard(props) {

        return (
            <div className="IdCard">
                <div className="IdCard-left">
                    <img src={`${props.picture}`} alt=""/>
                </div>
                <div className="IdCard-right">
                    <p><b>Last name:</b><span> {props.lastName}</span></p>
                    <p><b>First name:</b><span> {props.firstName}</span></p>
                    <p><b>Gender:</b><span> {props.gender}</span></p>
                    <p><b>Birth:</b><span> {props.birth.toString().slice(0,16)}</span></p>
                </div>
            </div>
            
        )

} 
