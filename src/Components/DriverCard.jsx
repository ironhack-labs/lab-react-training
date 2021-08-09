import '../Styles/DriverCard.css';
import Rating from '../Components/Rating';

function DriverCard(props) {
  return (
    <div className="driverCardWrapper">
      <div className="driverCardAvatarContainer">
        <img className="driverCardAvatarImg" src={props.img} alt="avatar" />
      </div>

      <div className="driverCardInfo">
        <p>
          <b>{props.name}</b>
        </p>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
