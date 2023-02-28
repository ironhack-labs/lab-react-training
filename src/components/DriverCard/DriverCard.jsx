import './../DriverCard/DriverCard.css'
import Rating from '../Rating/Rating'

function DriverCard({ name, rating, img, car }) {

    return (
        <section className='DriverCard'>
            <div>
                <img src={img} alt={name} />
            </div>
            <div className='TextContent'>
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </section>
    )
}
export default DriverCard