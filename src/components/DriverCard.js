import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="driverCard">
            <img
                style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                }}
                src={img} alt={name} />
            <div>
                <h1>
                    {name}
                </h1>
                <Rating>{rating}</Rating>
                <p>
                    {car.model} - {car.licensePlate}
                </p>
            </div>
        </div>

    );

};


export default DriverCard;