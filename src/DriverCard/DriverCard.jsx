import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className='it7'>
            <div className="row fila" style={{ backgroundColor: "#11aa99" }}>
                <div className="col">
                    <picture>
                        <img src={img} alt={name} /></picture></div>
                <div className="col"><h3>{name}</h3>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        </div>
    )

}

export default DriverCard