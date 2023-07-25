import React from 'react';

function DriverCard(props) {
  const filledStars = Math.round(props.rating);
  const emptyStars = 5 - filledStars;

  const starIcons = [];
  for (let i = 0; i < filledStars; i++) {
    starIcons.push('★');
  }
  for (let i = 0; i < emptyStars; i++) {
    starIcons.push('☆');
  }

  return (
    <div className="dCard-wrapper">
      <img src={props.img} alt="profile picture" />
      <div className="dCard-info">
        <h3>{props.name}</h3>
        <p>{starIcons.join('')}</p>
        <span>{props.car.model} </span> <span>- {props.car.licensePlate}</span>
      </div>
    </div>
  );
}

export default DriverCard;
