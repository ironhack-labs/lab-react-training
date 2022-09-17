import Moment from 'moment';

function IdCard(props) {
  return (
    <div>
      <p className="lastName">{props.lastName}</p>
      <p className="firstName">{props.firstName}</p>
      <p className="gender">{props.gender}</p>
      <p className="height">{props.height}</p>
      <p className="birth">{Moment(props.birth).format("MMM Do YYYY")}</p>
      <img className="picture" src={props.picture} alt="picture"></img>
    </div>
  );
}

export default IdCard;
