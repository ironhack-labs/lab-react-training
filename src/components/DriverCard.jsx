import Rating from './Rating';
function DriverCard({ name, rating, img, car }) {
  return (
    <article class="drivercard">
      {img ? <img src={img} alt={name} width="150" height="150" /> : null}
      <h3>{name}</h3>
      <Rating displayNum={false}>{rating}</Rating>
      <br />
      {car.model} – {car.licensePlate}
    </article>
  );
}

export default DriverCard;
