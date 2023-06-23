import Rating from './Rating';

function DriverCard(props) {
    const { driverCard } = props;

    return (
        <div className='driverCard'>
            <div>
                <img className='driverCardImg' src={driverCard.img} alt='driverImg'></img>
            </div>
            <div className='driverCardData'>
                <h2>{driverCard.name}</h2>
                <div className='stars'>
                    <Rating>{driverCard.rating}</Rating>
                </div>
                <p>{driverCard.car.model} - {driverCard.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;