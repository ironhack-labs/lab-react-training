import React from "react";

const DriverCard = (props) => {

  return (
    <article>
      <div className="driver-container">
        <div>
          <img src={props.img} height="150" alt="profile-pic"></img>
        </div>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.rating}</h3>
          <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
      </div>
    </article>
  )
}

export default DriverCard;