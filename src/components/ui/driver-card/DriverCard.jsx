import "./DriverCard.css";

function DriverCard({ name, rating, img, car }) {
  const driverImageStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="driver-card d-flex justify-content-center align-items-center p-3 m-2">
      <div className="driver-image" style={driverImageStyle}></div>
      <div className="driver-info px-3">
        <h3>{name}</h3>
        <p>
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
        </p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
