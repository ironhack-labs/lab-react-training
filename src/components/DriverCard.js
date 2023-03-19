import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="container-fluid text-white bg-primary border rounded-2 m-3 p-2 d-flex flex-row justify-content-center align-items-center">
      <img src={img} className="rounded-circle" style={{width: "125px", height: "125px"}} alt="Driver Avatar" />
      <div className="ms-4">
        <h3>{name}</h3>
        <p className="fs-4"><Rating>{rating}</Rating></p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
};


DriverCard.defaultProps = {
  name: "",
  rating: "",
  img: "",
  car: ""
};

export default DriverCard;