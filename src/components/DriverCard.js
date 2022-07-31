import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  //from Rating
  function stars(rating) {
    if (Math.round(rating) === 0) {
      return '☆☆☆☆☆';
    } else if (Math.round(rating) === 1) {
      return '★☆☆☆☆';
    } else if (Math.round(rating) === 2) {
      return '★★☆☆☆';
    } else if (Math.round(rating) === 3) {
      return '★★★☆☆';
    } else if (Math.round(rating) === 4) {
      return '★★★★☆';
    } else if (Math.round(rating) === 5) {
      return '★★★★★';
    }
    return '☆☆☆☆☆';
  }

  return (
    <div className="id-driver">
      <img src={img} alt="" />
      <div className="driver-data">
        <p>
          {' '}
          <b>{name}</b>
        </p>
        <p>
          <Rating>{stars(rating)}</Rating>
        </p>
        <p>
          {car.model} = {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
