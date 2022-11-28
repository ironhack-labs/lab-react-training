const DriverCard = props => {
    const { name, rating, img, car } = props

    console.log(props)

    let roundedRating = Math.round(rating)
    let fullStar = '★'
    let emptyStar = '☆'



    return (
        <div>
            <p>{name}</p>
            <p>{fullStar.repeat(roundedRating)}{emptyStar.repeat(5 - roundedRating)}</p>
            <img src={img} />
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    )
}

export default DriverCard