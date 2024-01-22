import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div className="driver-card">
      <div className="driver-card-inner">
        <div className="driver-image">
          <img src={img} alt="" />
        </div>

        <div className="driver-info">
          <h1 className="driver-name">{name}</h1>
          <div className="driver-rating">
            {' '}
            <Rating>{rating}</Rating>{' '}
          </div>
          <div className="driver-car">
            <p className="driver-car-model">{car.model}</p>-
            <p className="driver-car-license">{car.licensePlate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DriverCard;
