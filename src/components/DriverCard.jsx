import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
    return (
      <div className="driverCard-box">
        <img src={img} alt={name} />
        <div className="driver-info">
            <h4>{name}</h4>
            <Rating children={rating} />
            <p>
                <span>{car.model} - {car.licensePlate}</span>
            </p>
        </div>
     
      </div>
    );
  }
  
  export default DriverCard;
