import './DriverInfo.css';
import Rating from '../Rating';

function DriverCard({ name, rating, img, car }) {
    return (
        <div>
            <div className="driverCar">
                <div className="pic">
                    <img src={img} alt="profile" />
                </div>
                <div className="driverInfo">
                    <h2>{name}</h2>
                    <Rating>{rating}</Rating>
                    <span> {car.model} - {car.licensePlate} </span>
                </div>
            </div>

        </div>
    )
}
export default DriverCard

    