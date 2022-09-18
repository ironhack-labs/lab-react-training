import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <article>
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} – {car.licensePlate}
        </p>
      </div>
    </article>
  );
}

export default DriverCard;