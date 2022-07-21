import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <div><img className="driverImg" src={props.img} alt="img" /></div>
      <div className="driverInfo">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {' '}
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
