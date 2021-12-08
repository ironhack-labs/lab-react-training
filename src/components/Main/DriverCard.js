//driverCar
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  const model = car.model;
  const licensePlate = car.licensePlate;
  return (
    <div className="DriverCard">
      <img className="left" alt="DriverCard" src={img} />
      <div className="right">
        <h2>{name}</h2>
        <div className="Rating">
          <Rating>{rating}</Rating>
        </div>
        <p>
          {model} {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;