import './DriverCard.css';
import Rating from '../rating/Rating';
import React from 'react';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <div className="profileImage">
        <img src={props.img} alt="profile"></img>
      </div>
      <div className="driverInfo">
        <h1>{props.name}</h1>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;

{
  /* <DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/> */
}
