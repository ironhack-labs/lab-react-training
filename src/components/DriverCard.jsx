const DriverCard = (props) => {
    return (
        <div>
            <div className="driverImg">
                <img
                    src={props.img}
                    alt="profile"
                />
            </div>
            <p>{props.name}</p>
            <p>{props.car.model}</p>
            <p>{props.rating}</p>
            <p>{props.car.licensePlate}</p>
        </div>)
}

export default DriverCard