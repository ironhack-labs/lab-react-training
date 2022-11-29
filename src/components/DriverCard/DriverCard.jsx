import Rating from '../Rating/Rating'
import './DriverCard.css'


const DriverCard = props => {


    const { name, rating, img, car } = props
    const { model, licensePlate } = car
    return (
        <div className='DriverCard'>
            <img src={img} alt="Driver Picture" />
            <div className="right">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{`${model} - ${licensePlate}`}</p>
            </div>

        </div>
    )
}

export default DriverCard