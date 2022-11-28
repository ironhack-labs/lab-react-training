import './DriverCard.css'

const DriverCard = props => {

    const { name, rating, img, car } = props
    const { model, licensePlate } = car

    return (
        <section className="DriverCard">
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</p>
            <p>{model} - {licensePlate}</p>
        </section>
    )
}

export default DriverCard