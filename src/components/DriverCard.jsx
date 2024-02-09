/* eslint-disable react/prop-types */
const DriverCard = ({ name, rating, img, car}) => {
    return (
        <div className="driver-card ">
            <img className="w-50" style={{ borderRadius: '400px' }} src={img} alt={name} />
        <div>
            <h2>{name}</h2>
            <p>{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</p>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
        </div>
    )
}

export default DriverCard;