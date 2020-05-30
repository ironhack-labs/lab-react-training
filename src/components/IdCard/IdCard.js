import React from 'react';

const IdCard = (props) => (
    <div className='FlexRow'>
        <div><img src={props.picture} /></div>
        <div className='PersonData'>
            <p><strong>First name:</strong> {props.firstName}</p>
            <p><strong>Last name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Birth Date:</strong> {props.birth.toDateString()}</p>
        </div>
    </div>
);

export default IdCard;