import './DriverCard.css';
import Rating from './Rating';
const DriveCard = (props) =>{
    return (
        <div className="DriverCard">
            <img src={props.img} alt="imagePerson"/>
            <div className="content" >
              <h2>{props.name}</h2>
              <p><Rating>{props.rating}</Rating></p>
              <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )

}
export default DriveCard