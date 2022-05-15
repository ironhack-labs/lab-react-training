import Rating from "./Rating";
export default function DriverCard(props) {
    const { name, rating, img, car } = props;

    return (
        <div className="flex-row driver-card box">
            <img src={img} alt="profile" />
            <div>
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <div>
                    <p>{car.model + " - " + car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}