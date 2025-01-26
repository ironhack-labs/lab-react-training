import "./DriveCard.css";
import ProfileImage from "./ProfilePic/ProfilePic";
import RatingDriver from "./RatingDriver/RatingDriver";

function DriveCard(props) {
  return <div className="driveCardDiv">
    <div>
        <ProfileImage image={props.img}/>
    </div>
    <div className="info-div">
        <h2>{props.name}</h2>
        <RatingDriver number={props.rating}></RatingDriver>
        <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
  </div>;
}

export default DriveCard;