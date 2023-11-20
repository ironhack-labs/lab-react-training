import Rating from "../Rating/Rating"
import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (
        <div className="divDrivers">
            <div>
                <img src={img} alt={name} className="imgDrivers" />
            </div>
            <div className="descriptionDrivers">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{model} {licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard