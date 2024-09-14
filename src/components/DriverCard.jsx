import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="flex items-center border p-4 mb-4 rounded-lg bg-blue-500 text-white">
      <img src={img} alt={name} className="w-24 h-24 rounded-full mr-4" />
      <div>
        <h2 className="text-xl mb-2">{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
