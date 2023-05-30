function DriverCard(props) {
    const { driverCard } = props;
    const rating = Math.round(driverCard.rating);
    const stars = ['☆', '☆', '☆', '☆', '☆'];
    for (let i = 0; i < rating; i++) {
        stars[i] = '★';
    }
    return (
        <div className='driverCard'>
            <div>
                <img className='driverCardImg' src={driverCard.img} alt='driverImg'></img>
            </div>
            <div className='driverCardData'>
                <h2>{driverCard.name}</h2>
                <div className='stars'>
                    {stars.join('')}
                </div>
                <p>{driverCard.car.model} - {driverCard.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;