/* eslint-disable react/prop-types */
import Rating from "../Rating";

function DriverCard(props) {
  return (
    <div className="DriverCard">
      <div className="DriverImg">
        <img src={props.img} />
      </div>
      <div className="DriverInfo">
        <p>{props.name}</p>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
