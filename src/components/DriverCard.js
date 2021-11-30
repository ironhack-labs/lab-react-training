import Rating from './Rating';
const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  return (
    <div>
      <div>
        <img src={img} alt="driver" />
      </div>
      <div>
        <h3>{name}</h3>
        <Rating>1.49</Rating>
        <p>{model}</p>
        <p>{licensePlate}</p>
      </div>
    </div>
  );
};
export default DriverCard;
