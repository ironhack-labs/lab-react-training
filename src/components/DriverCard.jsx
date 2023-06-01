import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  const { model, licensePlate } = car;

  return (
    <div className="DriverCard">
      <img src={img} alt="profile" />
      <p>{name}</p>
      <p>
        {model} - {licensePlate}
      </p>
      <Rating>{rating}</Rating>
    </div>
  );
};

export default DriverCard;
