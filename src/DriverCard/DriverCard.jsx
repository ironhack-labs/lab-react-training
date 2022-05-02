import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    return (

        <div className="drivenCard" >

            <img src={img} alt="" />
            <div className='texts'>
                <h2>{name}</h2>
                <span><Rating>{rating}</Rating></span>
                <p>{car.model}{car.licensePlate}</p>
            </div>
        </div>
    )

}


export default DriverCard
