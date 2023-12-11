function DriverCard(props){
    const {img, name, rating, car} = props;
    

    function driverRating(){
        if (rating <= 0.49) {
            return "☆☆☆☆☆";
        } else if (rating <= 1.49) {
            return "★☆☆☆☆";
        } else if (rating <= 2.49) {
            return "★★☆☆☆";
        } else if (rating <= 3.49) {
            return "★★★☆☆";
        } else if (rating <= 4.49) {
            return "★★★★☆";
        } else {
            return "★★★★★";
        }
    }

    return(
        <div className="driver-card">            
            <div className="driver-card-img">
                <img className="driver-img" src={img}></img>
            </div>

            <div className="driver-info">
                <p className="driver-info-name">{name}</p>
                <p className="driver-info-rating">{driverRating()}</p>
                <p className="driver-info-car-info">{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;