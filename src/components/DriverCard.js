const DriverCard = ({ name, rating, img, car }) => {
    const {model, licensePlate } = car
    return (
        <article>
            <img src={img} />
            <h3>{name}</h3>
            <p>{rating}</p>
            <p>{model}</p>
            <p>{licensePlate}</p>
        </article>
    )
}

export default DriverCard