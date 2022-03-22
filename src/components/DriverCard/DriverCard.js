import "./DriverCard.css"
import Rating from "../Rating/Rating"

function DriverCard({name , rating , img , car }) {
  return (
    <h3 className="border text-start">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid img-size rounded-start"
              alt="driver"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-text">{name}</h5>
              <Rating>{rating}</Rating>
              <h5 className="card-text">{car.model}</h5>
              <h5 className="card-text">{car.licensePlate}</h5>
            </div>
          </div>
        </div>
      </div>
    </h3>
  );
}

export default DriverCard;
