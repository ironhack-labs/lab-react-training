import React from 'react';
import './IdCard.css';
import '../../App.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <div className="d-flex">
        <div>
          <img src={picture} class="card-img" alt="photoPerson" />
        </div>
        <div class="d-flex flex-column mb-3">
          <p class="p-2">
            <strong>First name:</strong> {firstName}
          </p>
          <p class="p-2">
            <strong>Last name:</strong> {lastName}
          </p>
          <p class="p-2">
            <strong>Gender:</strong> {gender}
          </p>
          <p class="p-2">
            <strong>Height:</strong> {height}cm
          </p>
          <p class="p-2">
            <strong>Birth:</strong> {birth.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
