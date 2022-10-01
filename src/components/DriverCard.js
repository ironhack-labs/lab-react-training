function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img
        src={img}
        style={{
          borderRadius: '50%',
        }}
      />
      <div className="driver-text">
        <h2>{name}</h2>
        <div className="rating">{rating}</div>
        {car.model} - {car.licensePlate}
      </div>
    </div>
  );
}

export default DriverCard;
