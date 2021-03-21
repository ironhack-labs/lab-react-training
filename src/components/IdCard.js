import React from 'react';
import '../assets/css/IdCard.css'

const IdCard = (props) => {
    return (
        <div className='idcard'>
            <img src={props.picture} alt={props.alt} />
            <div className='idcardText'>
                <p><b>Last name:</b> {props.lastName}</p>
                <p><b>First name:</b> {props.firstName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}</p>
                <p><b>birth:</b> {props.birth.toDateString()}</p>
            </div>
        </div>)
}

export default IdCard;