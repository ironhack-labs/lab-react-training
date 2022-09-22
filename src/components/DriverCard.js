import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  //   console.log(name);

  return (
    <div className="driverCard">
      <img className="imgDriver" src={img} alt={name} />
      <div className="driverInfo">
        <h2>{name}</h2>
        <div>
          <Rating>{rating}</Rating>
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
