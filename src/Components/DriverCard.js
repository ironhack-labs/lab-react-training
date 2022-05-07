import Rating from "./Rating";

const DriverCard = ({name, rating, img, car}) => {

    return (
        <div>
            <div> <img src={img}/> </div>
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard;