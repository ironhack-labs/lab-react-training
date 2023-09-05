import Rating from "./Rating";

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="DriverCard">
      <img
        className="left"
        src={img} alt="driver"
      />
      <div className="right">
        <h2>{name}</h2>
        <div class="Rating"><Rating>{rating}</Rating></div>
        <p>{car.model} {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;
