
import Rating from './../rating/Rating';

function DriverCard(name, rating, img, car) {

    const driver = name
    const plate = driver.car.licensePlate
    const model = driver.car.model

    const imgStyle = {
        maxWidth: 150,
        maxHeight:100
    }
    
    return(
        <div >
            <div className="d-flex flex-row justify-content-center bg-primary text-white rounded m-3 p-2">
                <div>
                    <img src={driver.img} alt="" style={imgStyle} className="rounded-circle"/>
                </div>
                <div className="d-flex flex-column align-items-start ms-3">
                    <h6>{driver.name}</h6>
                    <Rating>{driver.rating}</Rating>
                    <small>{model} - {plate}</small>
                </div>
            </div>
        </div>
    );
}

export default DriverCard;