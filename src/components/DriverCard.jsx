import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <div className="content">
        <img className="rounded" src={img} alt="" />
        <div style={{ marginLeft: '20px' }}>
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <p>
            {car.model}
            <span> - {car.licensePlate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default DriverCard;
