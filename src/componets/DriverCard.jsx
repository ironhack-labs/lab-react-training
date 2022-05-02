import Rating from "./Rating"
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="dCard">
            <div className="class1">
                <img className="dImg" src={img} alt={name} />
            </div>
            <div className="class2">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard