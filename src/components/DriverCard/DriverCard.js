import Rating from '../Rating/Rating';
import './DriverCard.styles.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="DriverCard">
      <img className="left" src={img} alt={name}></img>
      <div className="right">
        <h2>{name}</h2>
        <div className="rating">
          <Rating>{rating}</Rating>
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
