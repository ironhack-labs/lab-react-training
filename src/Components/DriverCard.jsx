
const DriverCard = ({ name, rating, img, car }) => {
    return (
      <div className="driver-card">
        <div className="driver-card-img">
          <img src={img} alt={name} />
        </div>
        <div className="driver-card-info">
          <h2>{name}</h2>
          <div className="driver-card-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index < Math.round(rating) ? 'filled' : ''}>
                ★
              </span>
            ))}
          </div>
          <p className="car-info">
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  };
  export default DriverCard;