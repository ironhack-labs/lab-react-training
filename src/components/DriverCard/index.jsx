import './driverCard.css'
import './../Rating'
import Rating from './../Rating'
const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car
    return (
        <article className='driverCard'>
            <img src={img} alt={`${name} face`} />
            <article>
                <p>{name}</p>

                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>

            </article>
        </article>
    )
}

export default DriverCard