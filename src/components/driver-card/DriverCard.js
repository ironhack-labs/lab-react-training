import Rating from "../rating/Rating"

const DriverCard = ({name, rating, img, car, className}) => {
    return (
        <div className={`d-flex justify-content-center align-items-center bg-primary text-white px-5 py-3 ${className}`} style={{borderRadius: '0.25rem'}}>
            <div className="me-3" style={{borderRadius: '50%', backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100px', height: '100px'}}></div>
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;