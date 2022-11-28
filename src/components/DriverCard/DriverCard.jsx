import './DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;

  let roundedRating = Math.round(rating);
  const star = '★';
  const empty = '☆';

  return (
    <div className="DriverCard">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className="stars">
          {star.repeat(roundedRating)}
          {empty.repeat(5 - roundedRating)}
        </p>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
