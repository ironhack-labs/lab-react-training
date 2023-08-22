import "../components.css";
import Rating from "../Components/Rating";

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;

  return (
    <div class="driverCard">
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <img src={img} alt="" />
      <p>
        {model} {licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
