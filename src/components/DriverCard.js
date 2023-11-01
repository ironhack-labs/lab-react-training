import Rating from "./Rating";

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="driver-card-img">
        <img src={props.img} alt="driver" />
      </div>
      <div className="driver-card-info">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;