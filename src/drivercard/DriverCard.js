import React from 'react';
// import Rating from '../rating/Rating.js'
import './DriverCard.css';

function DriverCard(props) {
  let ratingStarts = '☆☆☆☆☆';
  if (props.children <= 1) {
    return (ratingStarts = '★☆☆☆☆');
  }
  if (props.children <= 2) {
    return (ratingStarts = '★★☆☆☆');
  }
  if (props.children <= 3) {
    return (ratingStarts = '★★★☆☆');
  }
  if (props.children <= 4) {
    return (ratingStarts = '★★★★☆');
  }
  if (props.children <= 5) {
    return (ratingStarts = '★★★★★');
  }

  return (
    <div
      style={{
        rounded: '25px',
        margin: '20px',
        width: '70vh',
        backgroundColor: '#4C50A9',
        padding: '15px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        fontSize: '20px',
        color: 'white',
      }}
    >
      <div>
        <div>
          <img className="image" src={props.img} alt="" />
        </div>
        <div>
          <p className="container">
            <b>{props.name}</b>
          </p>
          <p className="container"> {ratingStarts}</p>
          <p className="container">
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
