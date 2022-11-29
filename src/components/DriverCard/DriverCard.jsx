import('./driver-card.css')

const DriverCard = (props) => {
    const roundRate = Math.round(props.rating)
    let rating = ''
    switch (roundRate) {
        case 1:
            rating = "⭐☆☆☆☆"
            break
        case 2:
            rating = "⭐⭐☆☆☆"
            break
        case 3:
            rating = "⭐⭐⭐☆☆"
            break
        case 4:
            rating = "⭐⭐⭐⭐☆"
            break
        case 5:
            rating = "⭐⭐⭐⭐⭐"
            break
        default:
            rating = "☆☆☆☆☆"
            break
    }
    return (
        <div className='driver-card'>
            <p>{props.name}</p>
            <p>{rating}</p>
            <img src={props.img} alt={props.name} />
            <p>{props.car.model} - {props.car.licensePlate}</p>

        </div>
    )
}

export default DriverCard