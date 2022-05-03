import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="drivecar">
            <figure>
                <img src={img} alt="" />
            </figure>
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
        </div>
    )

}

export default DriverCard