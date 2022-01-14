import React from 'react';

const IdCard = ({lastName,firstName,gender,height,birth,picture}) => {
    return (
        <div className='id-card'>
            <div className='picture'>
            <img src={picture} alt='picture'/>
            </div>
            <ul className='list-idCard'> 
                <li><strong>First name:</strong> {firstName}</li>
                <li><strong>Last name:</strong> {lastName}</li>
                <li><strong>Gender:</strong> {gender}</li>
                <li><strong>Height:</strong> {height}</li>
                <li><strong>Birth:</strong> {birth.toDateString()}</li>
            </ul>
        </div>
    )
}

export default IdCard;