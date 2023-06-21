import Rating from './Rating';

export default function DriverCard(props) {
  return (
    <div className="driver-card box">
      <div className="driver-card__content">
        <img className="driver-card__avatar" src={props.img} alt="avatar" />
        <div className="driver-card__infos">
          <h3 className="driver-card__title">{props.name}</h3>
          <Rating>{props.rating}</Rating>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}
