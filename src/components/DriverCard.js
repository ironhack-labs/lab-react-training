
import Rating from "./Rating";

const DriverCard = ({name, rating, img, car}) => {
    return(
        <div className="driverCard">
            <img 
            style={{
                height:100,
                Width:100,
                borderRadius: 1000,
            }}
            src={img} alt = {name}/>
            <div>
                <h1>
                    {name}
                </h1>
            <Rating> {rating} </Rating>
            <p>
                {car.model} - {car.licensePlate}
            </p>
            </div>
        </div>

    );

};


export default DriverCard;
