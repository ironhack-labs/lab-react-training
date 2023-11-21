import Rating from "./Rating"

function DriverCard(props) {

    return (
        <div className="driverCardbox">
            <div className="driverimg">
                <img src={props.img} alt="driverimg" style={{ "width": "200px" }}></img>
            </div>
            <div className="driverRight">
                <div className="driverName">
                    {props.name}
                </div>
                <div className="driverStars">
                    <Rating>{props.rating}</Rating>
                </div>
                <div>{props.car.model} - {props.car.licensePlate}</div>
            </div>
        </div>
    )
}
export default DriverCard