import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-container">
      <div className="img-container">
        <img src={props.img} alt="Driver" />
      </div>
      <div className="info-container-driver">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car ? props.car.model : ''} -{' '}
          {props.car ? props.car.licensePlate : ''}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
