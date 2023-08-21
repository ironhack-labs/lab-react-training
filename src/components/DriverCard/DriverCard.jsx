import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <article className='drivercard'>

            <p>{name}</p>
            <img src={img} alt={name} />
            <Rating>{rating}</Rating>
            <p>{car.model}{car.licensePlate}</p>

        </article>
    )
}

export default DriverCard