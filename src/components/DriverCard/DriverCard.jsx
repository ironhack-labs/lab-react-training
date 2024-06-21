import './DriverCard.css'
import Rating from "../Rating/Rating"


const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {

    return (

        <div className="driver-card">
            <h1>Drive Card</h1>
            <img className="Driver-card-img" src={img} alt="" />
            <p>{name}</p>
            <div className="driver-rating">
                <Rating>{rating}</Rating>
            </div>
            <p>{model} {licensePlate}</p>
        </div>


    )
}
export default DriverCard