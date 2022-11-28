import './DriverCard.css'

const DriverCard = props => {
    const { name, rating, img, car } = props

    console.log(props)

    let roundedRating = Math.round(rating)
    let fullStar = '★'
    let emptyStar = '☆'



    return (
        <div className="DriverCard">
            <img src={img} />
            <div>
                <p>{name}</p>
                <p>{fullStar.repeat(roundedRating)}{emptyStar.repeat(5 - roundedRating)}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard