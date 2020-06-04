import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture}) => {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <img src={picture} alt="user"/>
          <h2>First Name:{firstName}</h2>
          <h2>Last Name: {lastName}</h2>
          <h2>Gender: {gender}</h2>
          <h2>height: {height}</h2>
          <h2>birth: {birth}</h2>
        </div>
      </div>
    );
  }

export default IdCard;