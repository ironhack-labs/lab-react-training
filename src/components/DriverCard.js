import Rating from "./Rating";
import './DriverCard.css'

function DriverCard (props) {
    const { name, rating, img, car } = props;

    return (
        <div className="driver-card">
            <img className="driverimg" src={img} alt="img" />
            <div className="card">
                <h3>{name}</h3>
                <div className='rating'><Rating children={rating} /></div>
                <p>{car.model} - {car.licensePlate}</p> 
            </div>
        </div>
    )
}
export default DriverCard;