import React from 'react';
import './App.css';

function IdCard (props) {
    return (
        <div className="idCard">
            name: {props.name} | 
            surname: {props.surname} |
            gender: {props.gender} |
            height: {props.height} |
            birth: {props.birth}
        </div>

    )
}

export default IdCard;