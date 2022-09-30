import './IdCard.css';

function IdCard(props) {
  return (
    <div className="idCard">
      <div className="profileImg">
        <img src={props.picture} alt="user profile" />
      </div>
      <div>
        <p>
          <b>First name:</b> {props.firstName}
        </p>
        <p>
          <b>Last name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height / 100}m
        </p>
        <p>
          <b>Birth:</b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
