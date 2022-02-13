import { Rating } from "..";
import './styleDriveCard.css'

const DriverCard = (props) => {
    const { name, rating, img, car } = props;

    return(
        <div className="DriverCard">

            <div className="DriverImg">
                <img src={img} alt="icon-driver"/>
            </div>
            
            <div className="DriverCont">      
            <h1>{name}</h1>
            <Rating>{rating}</Rating>
            <p>{car.model}, {car.licensePlate}</p>
            </div>  
        </div>
        
    )
};

export default DriverCard;