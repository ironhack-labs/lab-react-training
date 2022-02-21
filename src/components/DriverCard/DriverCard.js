import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = props => {

    const { name, rating, img, car } = props

    return (
        <div className='driverCard'>
            <img className="driver" src={img} alt="profile"></img>
            <div className="driver-info">
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )



}

export default DriverCard