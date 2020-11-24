import React from 'react';
// import Rating from './Rating/Rating.js'
//Rating is not working for me, not sure how to access the number in app.js..

function DriverCard(props) {
    const divStyle = {
      height: 100,
      width: 100,
    };
    return (
      <div>
        <div>
          <img style={divStyle} src={props.img} alt="driver" />
        </div>
        <div>{props.name}</div>
        <div>
           {/* <Rating>{props.rating}</Rating>  */} 
        </div>
        <div>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    );
  }

export default DriverCard;