/* eslint-disable react/prop-types */
import Rating from "../Rating/Rating";

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;

  return (
    <div className="d-flex justify-content-center">
      <div
        className="card mb-3 align-items-center"
        style={{ width: "1000px", backgroundColor: "#4a5fb8", color: "white" }}
      >
        <div className="row g-0 align-items-center">
          <div className="col-md-3">
            <img
              src={img}
              className="card-img-top object-fit-cover rounded-circle"
              style={{ height: "100px", width: "100px" }}
              alt="Picture Driver"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div>
                <Rating>{rating}</Rating>
              </div>
              <p className="card-text d-inline-flex">
                {model} - {licensePlate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
