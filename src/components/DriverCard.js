import Ratings from '../components/Ratings';

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
  return (
    <div className="driver-card">
      <div className="driver-picture-container">
        <img className="driver-picture" src={img} alt="driver" />
      </div>
      <div className="driver-info">
        <div className="driver-name"> {name} </div>
        <Ratings>{rating}</Ratings>
        <div className="text-white">
          {model} - {licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
