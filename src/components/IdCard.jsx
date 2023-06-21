export default function IdCard(props) {
  return (
    <div className="card box">
      <img className="card__userImage" src={props.picture} alt="profile" />
      <div className="card__userInfos">
        <div className="card__userInfo">
          <label htmlFor="firstName">First Name:</label>
          <span>{props.firstName}</span>
        </div>
        <div className="card__userInfo">
          <label htmlFor="lastName">Last Name:</label>
          <span>{props.lastName}</span>
        </div>
        <div className="card__userInfo">
          <label htmlFor="gender">Gender:</label>
          <span>{props.gender}</span>
        </div>
        <div className="card__userInfo">
          <label htmlFor="height">Height:</label>
          <span>{props.height}</span>
        </div>
        <div className="card__userInfo">
          <label htmlFor="birthdate">Birthdate:</label>
          <span>{props.birth.toDateString()}</span>
        </div>
      </div>
    </div>
  );
}
