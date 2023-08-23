import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (

        <article className='DriverCard'>

            <img src={img} alt={name} />

            <div className='DriverDetails'>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>

        </article>
    )
}

export default DriverCard