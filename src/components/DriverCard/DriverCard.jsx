import './DriverCard.css';

function DriverCard(props) {
  const { name, rating, img, car } = props;

  const numberRounded = (number) => {
    return Math.round(number);
  };

  let blackStars = '★';
  let whiteStars = '☆';

  return (
    <div className="driver-card">
      <div className="driver-name">{name}</div>
      <div className="driver-white-stars">{whiteStars.repeat(5)}</div>
      <div className="driver-black-stars">
        {blackStars.repeat(numberRounded(rating))}
      </div>
      <div className="driver-image">
        <img src={img} />
      </div>
      <div className="driver-details">
        {car.model} - {car.licensePlate}
      </div>
    </div>
  );
}

export default DriverCard;
