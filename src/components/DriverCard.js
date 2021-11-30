import Rating from './Rating';
const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  return (
    <div className="driverCard">
      <div className="driverCardImg">
        <img src={img} alt="driver" />
      </div>
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
