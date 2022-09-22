import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div className="cardDriver">
      <div className="cardDriverImg">
        <img src={img} alt={name} />
      </div>
      <div className="cardDriverInfo">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
