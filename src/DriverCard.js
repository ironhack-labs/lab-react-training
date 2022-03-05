import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img src={props.img}></img>
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p className="right">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
