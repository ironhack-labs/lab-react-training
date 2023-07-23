import React from 'react';

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className='card'>
      <div className='inner-card'>
        <img src={picture} alt="User Profile" />
        <div className='card-data'>
          <p><strong>First Name: </strong> {firstName}<br/>
          <strong>Last Name: </strong>{lastName}<br/>
          <strong>Gender: </strong>{gender}<br/>
          <strong>Height: </strong>{height}<br/>
          <strong>Birth:</strong>{birth.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;