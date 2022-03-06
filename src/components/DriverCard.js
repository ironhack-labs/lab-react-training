import Ratings from './Ratings';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const style = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="driver-card">
      <div className="driver-img" style={style}></div>
      <div className="driver-info">
        <h1>{name}</h1>
        <Ratings>{rating}</Ratings>
        <span>
          {car.model} - {car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
