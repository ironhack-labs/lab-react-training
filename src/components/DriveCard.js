import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="drivers-card">
      <img src={props.img} />
      <div className="driverInfo">
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
