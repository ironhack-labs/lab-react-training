import React from 'react';

const driverCard = (props) => {
 
  return (
    <div
      style={{
        width: '450px',
        height: '350px',
        backgroundColor: 'grey',
        // color: props.color,
      }}
    >
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <img src={props.img} style={{ width: '140px', height: '120px' }} alt="img"></img>
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  );
};
export default driverCard;
