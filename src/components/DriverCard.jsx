import '../assets/styles/driver-card.css';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="img-driver">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="driver-informations">
        <div className="driver-name">{props.name}</div>
        <div className="driver-rating">
          <Rating>{props.rating}</Rating>
        </div>
        <div className="driver-car">
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
