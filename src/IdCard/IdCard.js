function IdCard(props) {
  return (
    <div className="idcard-container">
      <div>
        <img className="profile-picture" src={props.picture} alt="" />
      </div>
      <div className="profile-info">
        <h3>
          First name: <span> {props.firstName}</span>
        </h3>
        <h3>
          Last name: <span> {props.lastName}</span>
        </h3>
        <h3>
          Gender: <span> {props.gender}</span>
        </h3>
        <h3>
          Height:
          <span> {props.height}</span>
        </h3>
        <h3>
          Birth:
          <span> {props.birth}</span>
        </h3>
      </div>
    </div>
  );
}

export default IdCard;
