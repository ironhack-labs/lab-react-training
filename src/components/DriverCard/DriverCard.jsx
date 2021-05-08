import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  console.log(props.car.model);
  let emptyStars = 5 - Math.round(props.rating);
  return (
    <div className="drivercardbox">
      <div>
        <img className="image" src={props.img} alt="roundprofile" />
      </div>
      <div>
        <h2>{props.name}</h2>
        {(() => {
          if (emptyStars === 0) {
            return <h2>★ ★ ★ ★ ★</h2>;
          } else if (emptyStars === 1) {
            return <h2>★ ★ ★ ★ ☆</h2>;
          } else if (emptyStars === 2) {
            return <h2>★ ★ ★ ☆ ☆</h2>;
          } else if (emptyStars === 3) {
            return <h2>★ ★ ☆ ☆ ☆</h2>;
          } else if (emptyStars === 4) {
            return <h2>★ ☆ ☆ ☆ ☆</h2>;
          } else {
            return <h2>☆ ☆ ☆ ☆ ☆</h2>;
          }
        })()}
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
