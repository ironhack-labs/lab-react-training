import React from 'react';

const driverCard = (props) => {
  //   const number = Math.round(props.rating);
  //   if (number === 0) {
  //     return <p>☆☆☆☆☆</p>;
  //   } else if (number === 1) {
  //     return <p>★☆☆☆☆</p>;
  //   } else if (number === 2) {
  //     return <p>★★☆☆☆</p>;
  //   } else if (number === 3) {
  //     return <p>★★★☆☆</p>;
  //   } else if (number === 4) {
  //     return <p>★★★★☆</p>;
  //   } else if (number === 5) {
  //     return <p>★★★★★</p>;
  //   }

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
      <img src={props.img} style={{ width: '140px', height: '120px' }}></img>
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  );
};
export default driverCard;
