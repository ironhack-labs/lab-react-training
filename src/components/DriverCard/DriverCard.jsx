import CarDriver from '../CarDriver/CarDriver'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    let driverRating
    if (rating < 1) {
        driverRating = "☆☆☆☆☆"
    }
    else if (rating >= 1 && rating < 1.5) {
        driverRating = "★☆☆☆☆"
    }
    else if (rating >= 1.5 && rating < 2.5) {
        driverRating = "★★☆☆☆"
    }
    else if (rating >= 2.5 && rating < 3.5) {
        driverRating = "★★★☆☆"
    }
    else if (rating >= 3.5 && rating < 4.5) {
        driverRating = "★★★★☆"
    }
    else {
        driverRating = "★★★★★"
    }

    return (
        <div className='DriverCard'>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{driverRating}</p>
                {/* <p>{car}</p> */}
                <CarDriver carData={car} />
            </div>

        </div>



    )

}

export default DriverCard
