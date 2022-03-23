import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ( {name, rating, img, car }) => {
    return (
        <div className='driver-card'>
            <img src={img}/>
            
            <div>
                <h4>{name}</h4>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard