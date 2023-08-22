import Rating from "./Rating";

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="driver-card-details">
        <img src={`${props.img}`} alt="" />
        <div className="driver-details">
          <h4>{props.name}</h4>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
