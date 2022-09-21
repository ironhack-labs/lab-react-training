import Rating from './Rating.jsx'
import './DriverCard.css'

function DriverCard({name,rating,img,car}){
    return (
        <div className='driver-card'>
            <img className='driver-img' src={img}></img>
            <div>
                <div>
                    <h3>{name}</h3>
                    <Rating className=''>{rating}</Rating>
                    <h6>{car.model}{car.licensePlate}</h6>
                </div>
            </div>

        </div>
    )
    
}
 export default DriverCard