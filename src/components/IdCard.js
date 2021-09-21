function IdCard(props) {
  return (
    <div className="IdCard">
      <div className="photo">
        <img src={props.picture} alt="" />
      </div>
      <div className="Bio">
        <div className="FirstName">
          <div className="label">First name:</div>
          <div className="value">{props.firstName}</div>
        </div>
        <div className="LastName">
          <div className="label">Last name:</div>
          <div className="value">{props.lastName}</div>
        </div>
        <div className="Gender">
          <div className="label">Gender:</div>
          <div className="value">{props.gender}</div>
        </div>
        <div className="Height">
          <div className="label">Height:</div>
          <div className="value">{props.height}</div>
        </div>
        <div className="Birth">
          <div className="label">Birth:</div>
          <div className="value">{props.birth.toString()}</div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
