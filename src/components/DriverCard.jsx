import Rating from "./Rating";

const DriverCard = ({name, rating, img, car}) => {
    return(
        <div className="driverCard">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h2>{name}</h2>
                <Rating 
                    rating={rating}
                />
                <span>{car.model} - {car.licensePlate}</span>
            </div>

        </div>
    )
}

export default DriverCard;