import React from 'react';
import './IdCard.css';

function IdCard(props) {
  //Tue Jul 14 1992
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let dateOfBirth = weekday[props.birth.getDay()];
  dateOfBirth += ' ' + props.birth.getMonth();
  dateOfBirth += ' ' + props.birth.getDay();
  dateOfBirth += ' ' + props.birth.getFullYear();
  return (
    <div className="idCard">
      <img src={props.picture} alt="Id Card"></img>
      <ul>
        <li>First Name: {props.lastName}</li>
        <li>Last Name: {props.firstName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birthday: {dateOfBirth}</li>
      </ul>
    </div>
  );
}

export default IdCard;
