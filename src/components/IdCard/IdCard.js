
import React from 'react';

export function IdCard({firstName, lastName, gender, height, birth, picture , children}) {
  
  return (
        <div className="card">
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{gender}</p>
          <p>{height}</p>
          <p>{birth}</p>
          <img src={picture} alt="alt"/>
        </div>
    )
} 