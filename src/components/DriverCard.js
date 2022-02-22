const DriverCard = ({ name, rating, img, car }) => {

    if (Math.round(rating) === 0) {
        rating = '☆☆☆☆☆'
    }
    if (Math.round(rating) === 1) {
        rating = '★☆☆☆☆'
    }
    if (Math.round(rating) === 2) {
        rating = '★★☆☆☆'
    }
    if (Math.round(rating) === 3) {
        rating = '★★★☆☆'
    }
    if (Math.round(rating) === 4) {
        rating = '★★★★☆'
    }
    if (Math.round(rating) === 5) {
        rating = '★★★★★'
    }

    return (
        <article className="row">
            <div className="col-4">
                <img src={img} alt={name} className='driverImg' />
            </div>
            <div className="col-8">
                <h1>{name}</h1>
                <p>{rating}</p>
                <p>{car.model} {car.licensePlate}</p>
            </div>
        </article>
    )
}

export default DriverCard