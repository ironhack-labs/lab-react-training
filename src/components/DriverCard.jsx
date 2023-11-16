import Rating from "./Rating";

function DriverCard(props) {
  const { rating, name, img, car } = props;

  return (
    <div className="DriverCard">
      <p>{name}</p>
      <p>
        <Rating>{rating}</Rating>
      </p>
      <br />
      <div>
        <img src={img} className="left" />
      </div>
      <div className="right">
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
