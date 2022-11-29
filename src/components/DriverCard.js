import Rating from "./Rating";
import "../components/DriverCard.css";

function DriverCard(props){
    const {name, rating, img, car} = props;
    return(
        <div className="DriverCard">
            <img src={img} alt={name} />
            <div className="description">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;