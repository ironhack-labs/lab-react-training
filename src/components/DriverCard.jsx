const DriverCard = props => {

    const { name, rating, img, car } = props

    return (
        <article>
            <p>{name}</p>
            <p>{rating}</p>
            <img src={img}></img>
            <p>{car.model} - {car.licensePlate}</p>
        </article>

    )

}

export default DriverCard