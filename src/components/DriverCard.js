import './DriverCard.css';


const DriverCard = ({ img, name, rating, car }) => {
  let star;
  switch (Math.round(rating)) {
    case 1:
      star = '★☆☆☆☆';
      break;
    case 2:
      star = '★★☆☆☆';
      break;
    case 3:
      star = '★★★☆☆';
      break;
    case 4:
      star = '★★★★☆';
      break;
    case 5:
      star = '★★★★★';
      break;
    default:
      star = '☆☆☆☆☆';
      break;
  }
  const { model, licensePlate } = car;
  return (
    <div className="driverCard">
      <div className="driver">
        <img src={img} alt={name} />
        <div className="driverData">
          <span style={{ fontSize: '2rem', fontWeight:'500' }}>{name}</span>
          <div className="driverStar">{star}</div>{' '}
          <span>
            {model} - {licensePlate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
