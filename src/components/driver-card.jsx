import Rating from "./rating";

function DriverCard(driver) {
    return (
        <div className="rounded m-2 p-3 d-flex justify-content-center" style={{ backgroundColor: "#3264ff", color: "white" }}>
            <img className="" src={ driver.img } style={{ width: "7em", height: "7em", borderRadius: "50%" }} />
            <div className="ms-4 text-start">
                <div className="fs-5 fw-semibold" >{ driver.name }</div>
                <Rating>{ driver.rating }</Rating>
                <div>{ driver.car.model } - { driver.car.licensePlate }</div>
            </div>

        </div>
    )
}

export default DriverCard;