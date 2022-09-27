import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img } = props;
  const { model, licensePlate } = props.car;
  return (
    <div className="driver-card">
      <img src={img}></img>
      <div className="driver-card-info">
        <h4>{name}</h4>
        <Rating>{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
