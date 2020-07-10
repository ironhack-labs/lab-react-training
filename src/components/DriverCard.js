import React from 'react';
import './DriverCard.css';
import Rating from './Rating';
import Avatar from './Avatar';

function DirverCard(props) {
  return (
    <div key={props.car.licensePlate} className="driverCard">
      <div>
        <Avatar isRounded width="100px" height="100px" src={props.img} />
      </div>
      <div className="driverData">
        <span className="driverName">{props.name}</span>
        <Rating color="white" width="30px">
          {props.rating}
        </Rating>
        <span>
          {props.car.model}&nbsp;-&nbsp;{props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}
export default DirverCard;
