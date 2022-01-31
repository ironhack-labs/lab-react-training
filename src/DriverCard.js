import "./DriverCard.css"
import Rating from "./Rating"

const DriverCard = (props) => {
    const { name, rating, img, car } = props;
    const { model, licensePlate } = car
    return( 
        <div className="DriverCard">
            <div>
                <img src={img} alt="Driver"/>
            </div>
            <div class="text">
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{model}-{licensePlate}</p>
            </div>
        </div>
    );
  }


  export default DriverCard;