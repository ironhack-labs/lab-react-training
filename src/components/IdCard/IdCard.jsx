import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const height =  `${props.height / 100}m` 
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta', 'Sun'];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augt", "Sep", "Oct", "Nove", "Dec"];
  const birthDate = {
    weekDay: weekDays[props.birth.getDay() - 1],
    month: months[props.birth.getMonth()],
    monthDay: props.birth.getDate(),
    year: props.birth.getFullYear()
  };
  return (
    <div className="idCard">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div className="idCardText">
        <p><span>First name:</span>  {props.firstName}</p>
        <p> <span>Last name:</span> {props.lastName}</p>
        <p><span>Gender:</span> {props.gender}</p>
        <p><span>Height:</span> {height}</p>
        <p><span>Birth:</span> {birthDate.weekDay} {birthDate.month} {birthDate.monthDay} {birthDate.year}</p>
      </div>
    </div>
  );
};

export default IdCard;

//<p>Birth: {props.birth}</p>