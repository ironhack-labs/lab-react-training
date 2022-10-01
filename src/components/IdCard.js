function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} className="profile-pic" alt="profilePic" />
      <div className="id-card-text">
        <p>
          <strong>First Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}m
        </p>
        <p>
          <strong>Birth:</strong> {props.birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
