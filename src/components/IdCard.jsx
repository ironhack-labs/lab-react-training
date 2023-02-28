import React from 'react';

function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <div className='id-card'>
      <img src={picture} alt="pictureid" />
      <div className='information-card'>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}</p>
        <p><b>Birth:</b> {birth.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
