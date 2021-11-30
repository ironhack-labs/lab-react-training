import Rating from "../Rating/Rating";
import "./DriverCard.css";

const DriverCard = (props) => {
  return (
    <div className="DriverCard">
      <div className="driverCard-container">
        <img src={props.img}  alt={props.name} />
        <div className="driverCard-elements">
          <h2>
            {props.name}
          </h2>
          <Rating>
            {props.rating}
            </Rating>
            <span>{props.car.model}-{props.car.licensePlate}</span>
          
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
