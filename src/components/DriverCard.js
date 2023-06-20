import Rating from "./Rating";

export default function DriverCard({name, rating, img, car}) {
    
    return (
    <div className="driver-card">
        <img src={img} alt={name + " photo"} />
        <div className="info">
            <span className="driver-name">{name}</span>
            <Rating>{rating}</Rating>
            <span className="car-info">{car.model} - {car.licensePlate}</span>
        </div>
    </div>);
}