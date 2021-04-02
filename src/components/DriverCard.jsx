import '../assets/css/DriverCard.css';
const DriverCard = ({ name, rating, img, car})  => {
    
    const number = Math.round(rating)

    return (
        <div className="DriverCard">
            <img src={img} alt={name}/>
            <div className="DriverDes">
                <h2>{name}</h2>
                <h4>{'★'.repeat(number) + '☆'.repeat(5 - number)}</h4>
                <h4>{car.model} {car.licensePlate}</h4>
            </div>
        </div>
    )
}

export default DriverCard