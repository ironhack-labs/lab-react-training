import React from 'react';
import './IdCard.css'

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {

    return (
        <div className='IdCard'>
            <div className='card-text'>
            <p><b>First name:</b> {firstName}</p>
            <p><b>Last name:</b> {lastName}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Height:</b> {height}m</p>
            <p><b>Birth:</b> {birth}</p>
        </div>
            <div className='card-img'>
            <img src={picture} alt="user-profile-img"/>
        </div>
  </div>
  )
}

export default IdCard;