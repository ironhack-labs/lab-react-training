import Rating from './Rating';

const DriverCard = (props) => {
    const {name,rating,img,car} = props;
    return (
      <div className='driverCard'>
        <img src={img} alt='driverimage'/>
        <div>
            <span style={{fontSize: '30px', fontWeigth: '15px'}} >{name}</span>
            <Rating>{rating}</Rating>
            <span>{car.model} - {car.licensePlate}</span>
        </div>
      </div>
    );
  };
  
  export default DriverCard;