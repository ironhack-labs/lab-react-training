import Rating from './Rating';
function DriverCard({ name, rating, img, car }) {
  return (
    <article className="drivercard">
      {img ? <img src={img} alt={name} width="150" height="150" /> : null}
      <h3>{name}</h3>
      <Rating displayNum={false}>{rating}</Rating>
      <p>
        {car.model} – {car.licensePlate}
      </p>
    </article>
  );
}

export default DriverCard;
