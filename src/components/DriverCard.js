import classes from './DriverCard.module.css';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className={classes.driverCard}>
      <img src={props.img} alt={props.name} className={classes.driverCardImg} />
      <div className={classes.driverCardDetails}>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
