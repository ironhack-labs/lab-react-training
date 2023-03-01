import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (
        <div className='DriverCard'>

            <img src={img} alt="" />


            <p>{name}</p>

            <div>
                <Rating>{rating}</Rating>
            </div>

            <p>{model} - {licensePlate}</p>
        </div>
    )
}

export default DriverCard