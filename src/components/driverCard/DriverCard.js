import './DriverCard.css'
import Rating from '../rating/Rating'

const DriverCard = ({ 
        name,
        rating,
        img,
        car }) => {

    


    return (
        <div className='driver' >
            <div className='name'>
                <img src={img} alt="image of driver"></img>
                <h1>{name}</h1>
                <figure className='stars'><Rating >{rating}</Rating></figure>
            </div>
            
            <h2>{car.model} {car.licensePlate}</h2>
        </div>
    )
}

export default DriverCard