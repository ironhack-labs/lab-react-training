import React from 'react';
import Parser from 'html-react-parser';
import '../App.css';

function DriverCard(props) {
  let star1, star2, star3, star4, star5;
  star1 = star2 = star3 = star4 = star5 = Parser(`<span>&#9734;</span>`);

  if (props.rating >= 0.5) {
    star1 = Parser(`<span>&#9733;</span>`);
  }

  if (props.rating >= 1.5) {
    star2 = Parser(`<span>&#9733;</span>`);
  }

  if (props.rating >= 2.5) {
    star3 = Parser(`<span>&#9733;</span>`);
  }

  if (props.rating >= 3.5) {
    star4 = Parser(`<span>&#9733;</span>`);
  }

  if (props.rating >= 4.5) {
    star5 = Parser(`<span>&#9733;</span>`);
  }

  return (
    <div className="driver-card">
      <img src={props.img} alt="Driver's photo"></img>
      <div>
        <h4>{props.name}</h4>
        <div>
          {star1}
          {star2}
          {star3}
          {star4}
          {star5}
        </div>
        <p>
          {props.car.model} – {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
