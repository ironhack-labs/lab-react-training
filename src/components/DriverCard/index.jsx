import Rating from '../Rating';
import './index.css';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div className="FotoCircle">
        <img className="Foto" src={img} alt="" />
      </div>
      <div className='Info'>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;