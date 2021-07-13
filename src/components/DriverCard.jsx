import React from 'react';

const driverCard = (props) => {
  return (
    <div className=" border border-black rounded-md text-xl my-4 p-8 bg-blue-300">
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <img
        src={props.img}
        style={{ width: '100px', height: '110px' }}
        alt="img"
      ></img>
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  );
};
export default driverCard;
