import Rating from './Rating';

const DriverCard = (props) => {
  const driverImg = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <Rating>{props.rating}</Rating>
      <img src={props.img} alt="" style={driverImg} />
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
