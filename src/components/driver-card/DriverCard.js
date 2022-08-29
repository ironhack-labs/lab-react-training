import './DriverCard.css';

import Rating from '../rating/Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <div className="row justify-content-center">
        <div className="col-2 text-end">
          <img src={img} alt={name} />
        </div>
        <div className="col-4 text-start">
          <div className="d-flex flex-column driver-card__detail">
            <h3>{name}</h3>
            <Rating fontRating="1.5">{rating}</Rating>
            <span>
              <span>{car.model}</span><span>{car.licensePlate}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;