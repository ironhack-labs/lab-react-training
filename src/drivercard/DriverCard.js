import './DriverCard.css'
import Rating from '../rating/Rating'

const DriverCard = (props) =>{
return(
<div className='DriverCard'>
    <img src={props.img} alt={props.name}/>
    <div className='DriverCard-info'>
        <h2>
        {props.name}
        </h2>
    <Rating>{props.rating}</Rating>
    {props.car.model} - {props.car.licensePlate}
    </div>
   
</div>
)
}

export default DriverCard