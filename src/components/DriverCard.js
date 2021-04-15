import Rating from './Rating';

function DriverCard(props) {
  return (
    <div class="driver-card w-25 p-3">
      <span class="card-body">
        <img className="driver-img" src={props.img} alt="..." />
        <h3 class="card-title">{props.name}</h3>
        <p class="card-rating">
          <Rating>{props.rating}</Rating>
        </p>
        <p>
          {' '}
          {props.car.model} {props.car.licensePlate}
        </p>
      </span>
    </div>
  );
}

export default DriverCard;
