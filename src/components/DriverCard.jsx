
function DriverCard (props) {
    const { name, rating, img, car } = props;


    function driverRate(){
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

    return (
        <div className="driver">
      <div className="driver-img">
        <img className="driver-img" src={img} alt="Driver" />
      </div>

      <div className="driver-card">
        <p className="name">{name}</p>
        <p className="rate">{driverRate()}</p>
        <p className="car-info">{car.model} - {car.licensePlate}</p>
      </div>
    </div>
    )
}


export default DriverCard;