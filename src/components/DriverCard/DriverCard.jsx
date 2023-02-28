import './DriverCard.css'

const DriverCard = (props) => {

    const { name, rating, img, car } = props
    let points
    if (rating === '0') { points = '☆ ☆ ☆ ☆ ☆' }
    else if (rating < '1.5') { points = '★ ☆ ☆ ☆ ☆' }
    else if (rating >= '1.5' && rating < '3') { points = '★ ★ ☆ ☆ ☆' }
    else if (rating >= '3' && rating < '4') { points = '★ ★ ★ ☆ ☆' }
    else if (rating >= '4' && rating < '5') { points = '★ ★ ★ ★ ☆' }
    else if (rating >= '5') { points = '★ ★ ★ ★ ★' }


    return <article className='driverCard'>

        <div className="picture">
            <img className="image" src={img} alt={name} />
        </div>
        <div>
            <p><b>Name: </b>{name}</p>
            <p><b>Rating: </b>{points}</p>
            <p><b>Car: </b>{car.model} {car.licensePlate}</p>
        </div>
    </article>

}

export default DriverCard