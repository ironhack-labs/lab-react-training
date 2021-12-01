import './DriverCard.css'
import Rating from '../Rating/Rating';

function DriverCard(props) {
    const {img,name,rating,car} = props;
    const {model, licensePlate} = car;

    return (
      <div className="DriverCard">
        <div>
            <img src={img} alt= "driver-img" />
        </div>
        <div>
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </div>
      </div>
    );
}

export default DriverCard;