import Rating from "./Rating";

function DriverCard(props){

    const {name, rating, img, car} = props;

    return(
        <div className="driver-card">
            <img className="driver-pic" src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <p>{car.model} {car.licensePlate}</p>
            </div>
        </div>

    )
}

export default DriverCard;