import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img className='driverPicture' src={props.img} alt="Profile" />
      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <span>{props.car.model} - </span>
        <span>{props.car.licensePlate}</span>
      </div>
    </div>
  );
}

export default DriverCard;
