import Rating from "./Rating"
import './DriverCard.css'
const DriverCard = ({ name, car, img, rating }) => {


    const { model, licensePlate } = car
    return (
        <div className="driver-card">
            <img src={img} alt={img} />
            <div>
                <p> {name}</p>
                <Rating>{rating}</Rating>
                <p> {model}</p>
                <p> {licensePlate}</p>
            </div>


        </div>

    )


}

export default DriverCard