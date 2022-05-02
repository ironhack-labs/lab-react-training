import './DriverCard.css'


const DriverCard = ({ name, rating, img, car }) => {

    let ratingValue = Math.round(rating)
    let stars = ratingValue

    if (ratingValue === 0) {
        stars = <h1>☆☆☆☆☆</h1>
    }
    if (ratingValue === 1) {
        stars = <h1>★☆☆☆☆</h1>
    }
    if (ratingValue === 2) {
        stars = <h1>★★☆☆☆</h1>
    }
    if (ratingValue === 3) {
        stars = <h1>★★★☆☆</h1>
    }
    if (ratingValue === 4) {
        stars = <h1>★★★★☆</h1>
    }
    if (ratingValue === 5) {
        stars = <h1>★★★★★</h1>
    }


    return (

        <article className='driver-card'>
            <img src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                <h3>{stars}</h3>
                <p>{car.model} {car.licensePlate}</p>
            </div>
        </article>

    )
}

export default DriverCard