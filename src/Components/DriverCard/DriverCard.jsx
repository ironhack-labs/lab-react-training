
import './DriverCard.css'


const DriverCard = ({ name, rating, img, car }) => {

    let ren = Math.round(rating)

    let pintar

    if (ren == 0) {
        pintar = "☆☆☆☆☆"
    }
    if (ren == 1.49) {
        pintar = "★☆☆☆☆"
    }
    if (ren == 2) {
        pintar = "★★☆☆☆"
    }
    if (ren == 3) {
        pintar = "★★★☆☆"
    }
    if (ren == 4) {
        pintar = "★★★★☆"
    }
    if (ren == 5) {
        pintar = "★★★★★"
    }

    return (
        <div className="driverCard">
            <p>Nombre {name}</p>
            <p>Pintar {pintar}</p>
            <img src={img} alt="" />
            <p> {car.model}</p>
            <p> {car.licensePlate}</p>



        </div>
    )
}

export default DriverCard