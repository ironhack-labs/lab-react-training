import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard">
      <div>
        <img className="driverPhoto" src={img} alt={name} />
      </div>
      <div className="driverData">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
