import React from 'react';

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className='card-cnt'>
      <div className='inner-card'>
        <img src={picture} alt="User Profile" />
        <div className='inner-card-data'>
          <h3>First Name: {firstName}</h3>
          <h3>Last Name: {lastName}</h3>
          <h3>Gender: {gender}</h3>
          <h3>Height: {height}</h3>
          <h3>Birth: {birth.toDateString()}</h3>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
