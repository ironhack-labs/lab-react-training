import Rating from './Rating';
import './DriverCard.css'



function DriverCard({ name, rating, img, car }) {

    return (
        <div className='DriverCard  rounded rounded-3'>
            <img className='img-driver rounded-circle' src={img} alt="img" />
            <h1>{name}</h1>
            <div><Rating>{rating}</Rating></div>
            <h2>{car.model} - {car.licesePlate}</h2>
        </div>


    )
}

export default DriverCard