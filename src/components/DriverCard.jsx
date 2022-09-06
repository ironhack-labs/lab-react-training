import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="DriverCard">
      <img alt="Driver" src={props.img}/>
      <div className="info">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p className='model'>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
