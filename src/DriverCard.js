import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <div>
        <img src={props.img} style={{ width: '6vw' }}></img>
      </div>
      {props.name}
      <Rating>{props.rating}</Rating>
      {props.car.model} - {props.car.licensePlate}
    </div>
  );
}

export default DriverCard;