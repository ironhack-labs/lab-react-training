import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {
    const { licensePlate, model } = car
    console.log(licensePlate)

    return (
        <div className='driverCard'>
            <div>
                <img className='imgDriver' src={img} alt="" />
            </div>
            <div className='dataDriver'>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )

}

export default DriverCard