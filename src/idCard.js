function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture}></img>
      <div>
        <b>First Name:</b> {props.firstName}
        <br />
        <b>Last Name:</b> {props.lastName}
        <br />
        <b>Gender:</b> {props.gender}
        <br />
        <b>Height:</b> {props.height / 100}m
        <br />
        <b>Birth:</b> {props.birth}
      </div>
    </div>
  );
}

export default IdCard;
