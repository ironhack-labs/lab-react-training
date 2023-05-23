import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {
    const stars = Math.round(rating);
    const starIcons = '★'.repeat(stars) + '☆'.repeat(5 - stars);

    return (
        <div className="driver-card">
            <img src={img} alt={name} />
            <div className="driver-info">
                <h2>{name}</h2>
                <div className="rating">
                    <span>{starIcons}</span>
                    <p>{rating.toFixed(1)}</p>
                </div>
                <p>
                    {car.model} - {car.licensePlate}
                </p>
            </div>
        </div>
    );
};

export default DriverCard;
