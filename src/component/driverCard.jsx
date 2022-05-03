import './driverCard.css'

function DriverCard(props) {
    return (
        <div className="DriverCard">
            <img src={props.img} alt="DriverPicture" />
            <div>
                <h2>{props.name}</h2>
                <div>
                    {props.car.model} - {props.car.licensePlate}
                </div>
            </div>
        </div>
    )
}

export default DriverCard