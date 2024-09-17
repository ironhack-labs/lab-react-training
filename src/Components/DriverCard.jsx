const DriverCard = ({ name, rating, img, car }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  const filledStarElements = '★'.repeat(filledStars);
  const emptyStarElements = '☆'.repeat(emptyStars);

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-card-info">
        <h2>{name}</h2>
        <div className="driver-rating">
          {filledStarElements}
          {emptyStarElements}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
