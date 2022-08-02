import React from "react";

function DriveCard(props) {


};


return (
  <div className="DriverCard">
        <p>{props.name}</p>
        <p>{props.rating}</p>
        <p>{props.img}</p>
        <p>{props.car}</p>
      </div>
    );

  
  export default DriveCard;