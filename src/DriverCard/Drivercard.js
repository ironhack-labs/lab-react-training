import './DriverCard.css'


const DriverCard = ({ name, rating, img, car }) => {

    let basicrating = Math.round(rating)

    let stars;

    if (basicrating === 5) {

        stars = '★★★★★'

    }

    if (basicrating === 4) {

        stars = '★★★★☆'
    }

    if (basicrating === 3) {

        stars = '★★★☆☆'
    }

    if (basicrating === 2) {

        stars = '★★☆☆☆'
    }

    if (basicrating === 1) {

        stars = '★☆☆☆☆'
    }

    if (basicrating === 0) {

        stars = '☆☆☆☆☆'
    }

    return (

        <div className="licence">

            <p>{name}</p>
            <img src={img}></img>
            <p>{car.model}</p>
            <p>{car.licensePlate}</p>

        </div>

    )

}

export default DriverCard