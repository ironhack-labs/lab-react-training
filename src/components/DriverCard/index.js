import './DriverCardStyle.css'
import Rating from '../Rating/index'

function DriverCard(props) {
    const { rating, img, name, car } = props;

    return (
      <div className="DriverCard">
        <section className="image-cropper">
          <img src={img} alt="Card" />
        </section>
        <section>
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </section>
      </div>
    );
}

export default DriverCard;