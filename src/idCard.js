import React from 'react';
import './App.css';

export default function IdCard({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}){
    return(
        <div className="id-card">
      <img src={picture} alt={firstName} />
      <div>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}</p>
        <p><b>Birth:</b> {birth.toDateString()}</p>
      </div>
    </div>
    )
}