import './DriverCard.css'
import Rating from "../Rating/Rating";
const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car
    return (
        <>
            <div>

                <img className='driverImage' src={img}></img>
                <p>{name}</p>
                <Rating>{rating}</Rating>

                <p>{car.model}</p>
                <p>{car.licensePlate}</p>
            </div>

        </>


    )
}

export default DriverCard;