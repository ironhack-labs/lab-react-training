import Rating from '../Rating/Rating';
import './DriverCard.css';

function DriverCard({ name, rating, img, car}) {
    const inlineStyle = {
        backgroundImage: 'url('+img+')',
        backgroundSize: 'cover',
        height: '100px',
        width: '100px',
        borderRadius: '50%'
    }

    return ( 
        <div className='DriverCard'>
            <div style={inlineStyle}></div>
            <div className='driver-card-content'>
                <h1>{ name }</h1>
                <Rating>{ rating }</Rating>
                <p>{ car.model } - { car.licensePlate }</p>
            </div>
        </div>
     );
}

export default DriverCard;

