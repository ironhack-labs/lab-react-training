import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    const round = Math.round(rating)
    switch (round) {
        case 1:
            rating = <p>★☆☆☆☆</p>
            break;
        case 2:
            rating = <p>★★☆☆☆</p>
            break;
        case 3:
            rating = <p>★★★☆☆</p>
            break;
        case 4:
            rating = <p>★★★★☆</p>
            break;
        case 5:
            rating = <p>★★★★★</p>
            break;

    }
    return (
        <div className="driverCard">
            <img src={img} />
            <div className="info">
                <p><strong>{name}</strong></p>
                <p className='driverRating'>{rating}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard