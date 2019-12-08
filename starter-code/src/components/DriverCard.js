import React from "react";
import { Media} from 'reactstrap';
import Rating from "./Rating";
function DriverCard(props){
  const {name, rating, img, model, licensePlate} = props
  return(
    <div className="driverCard">
      <Media>
        <Media left >
          <Media src={img} alt="Driver" />
        </Media>
        <Media body>
        <Media heading>
          {name}
        </Media>
          <Rating>{rating}</Rating>
          {model} - {licensePlate}
      </Media>
    </Media>
    </div>
  );
}
export default  DriverCard;