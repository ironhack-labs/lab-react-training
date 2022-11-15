import React from 'react';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idCard">
      <img src={picture} alt="profile_photo" />

      <div>
        <p className='iDp'>First name: {firstName}</p>
        <p className='iDp'>Last name: {lastName}</p>
        <p className='iDp'>Gender: {gender}</p>
        <p className='iDp'>Height: {height}</p>
        <p className='iDp'>Birth: {birth.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
