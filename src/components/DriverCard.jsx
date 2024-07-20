import { PropTypes } from "prop-types";
import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="flex items-center bg-blue-500 text-white p-4 rounded-lg shadow-lg mb-4">
    <img src={img} alt={name} className="w-24 h-24 rounded-full mr-4 object-cover" />
    <div>
      <h2 className="text-xl font-bold">{name}</h2>
      <Rating>{rating}</Rating>
      <p>{car.model} - {car.licensePlate}</p>
    </div>
  </div>
  );
}

DriverCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  car: PropTypes.shape({
    model: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }).isRequired,
};

export default DriverCard;
