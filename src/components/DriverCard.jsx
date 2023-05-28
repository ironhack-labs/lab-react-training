import Rating from './Rating';

export default function DriverCard(props) {
  return (
    <div className="DriverCard">
      <div className="DC-ImgBlock">
        <img src={props.img} alt="Profile" />
      </div>
      <div className="DC-Data">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
