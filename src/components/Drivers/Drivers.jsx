import './Drivers.css'
import Rating from '../Rating/Rating'

const Drivers = ({ driver }) => {

    const { name, rating, img, car } = driver
    const { model, licensePlate } = car

    return (
        <div className="driverCard">
            <div className='image'>
                <img src={img} alt={name} />
            </div>
            <div className='text'>
                <h2 className='margin'>{name}</h2>
                <Rating className="rating">{rating}</Rating>
                <p className='margin'>{model} - {licensePlate}</p>
            </div>
        </div>
    )
}

export default Drivers