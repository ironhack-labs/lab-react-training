import './style.css'
import Rating from '../Rating/index'

function DriverCard(props){
    const {name, rating, img, car} = props;

   
return(
    <div className="DriverCard" >
        <h1>{name}</h1>
        <Rating>{rating} </Rating>
        {/* rating stars not working */}
        <img src={img} alt="{name}"/>
        <p>{car.model}, {car.licensePlate}</p>
    </div>
)
}

export default DriverCard