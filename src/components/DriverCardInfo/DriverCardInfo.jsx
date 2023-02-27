import Rating from '../Rating/Rating';
function DriverCardInfo({ name, car, rating }) {
    const { model, licensePlate } = car
    return (
        <div className='DriverCardInfo'>
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </div>
    );
}

export default DriverCardInfo;
