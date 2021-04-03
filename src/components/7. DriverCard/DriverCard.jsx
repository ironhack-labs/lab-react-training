import Rating from '../6. Rating/Rating';
import '../7. DriverCard/DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="box">
      <div className="DriverCard">
        <div className="imgBox">
          <img className="img" src={img} />
        </div>
        <div className="infoDriver">
          <span className="DriverName">{name}</span>
          <span>
            <Rating>{rating}</Rating>
            {car.model}-{car.licensePlate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
