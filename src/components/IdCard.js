import React from 'react'
import "./IdCard.css"


function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card">
      <img src={picture} alt="imageUser" />
      <div>
        <p>
          <strong>last name:</strong>
          {lastName}
        </p>
        <p>
          <strong>first name:</strong>
          {firstName}
        </p>
        <p>
          <strong>gender:</strong>
          {gender}
        </p>
        <p>
          <strong>height:</strong>
          {height}
        </p>
        <p>
          <strong>birth:</strong>
          {birth.toString()}
        </p>
      </div>
    </div>
  );
}


export default IdCard
