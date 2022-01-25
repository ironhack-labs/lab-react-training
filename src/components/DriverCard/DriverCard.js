import Rating from '../Rating/Rating'
import './DriverCard.css'
export const DriverCard = ({ name,rating,img,car:{model,licensePlate} })=>{
    return (
        <div className='driver-card-div'>
            <figure className='driver'>
                <img src={img} className='driver-img'></img>
            </figure>
            <div className='driver-data'>
                <h1>{name}</h1>
                <p><Rating>{rating}</Rating><br/>
                {model} - {licensePlate}</p>
            </div>
        </div>
    )


}
