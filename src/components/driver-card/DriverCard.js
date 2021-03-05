import Rating from '../rating/Rating';

function DriverCard({ name, rating, img, car: {model, licensePlate, className} }) {





    return (
        <div className={`d-flex justify-content-center p-3 rounded-3 ${className}`} style={{ backgroundColor: "#455eb5"}}>
            <div className="rounded-circle" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', width: '85px', height: '85px' }}></div>
            <div className="card-info ms-2" style={{ color: "white"}}>
                <h5 className="mb-1">{name}</h5>
                <Rating className="mb-1">{rating}</Rating>
                <span className="m-0">{model} - {licensePlate}</span>
            </div>
        </div>
    );
}

export default DriverCard;