import React from 'react';
import './IdCard.css';

const genderEnum = {
  female: 'female',
  male: 'male',
};

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) => {
  const getBirthDate = (date) => {
    return date.toString().split(' ', 4).join(' ');
  };

  const getGender = gender => genderEnum[gender] ? genderEnum[gender] : 'unknown';

  const getHeight = height => height / 100;

  return (
    <div className="id-card-container">
    <img src={picture} alt={`${firstName} ${lastName} profile`} />

    <div>
      <p><b>First name:</b> {firstName}</p>
      <p><b>Last name:</b> {lastName}</p>
      <p><b>Gender:</b> {getGender(gender)}</p>
      <p><b>Height:</b> {getHeight(height)}m</p>
      <p><b>Birth:</b> {getBirthDate(birth)}</p>
    </div>
  </div>
  )
};

export default IdCard;