import Moment from 'moment';

function IdCard(props) {
  return (
    <div>
      <p className="lastName">Last Name: {props.lastName}</p>
      <p className="firstName"> First Name:{props.firstName}</p>
      <p className="gender"> Gender: {props.gender}</p>
      <p className="height">Height: {props.height/100}m</p>
      <p className="birth">Birth: {Moment(props.birth).format("MMM Do YYYY")}</p>
      <img className="picture" src={props.picture} alt="picture"></img>
    </div>
  );
}

export default IdCard;
