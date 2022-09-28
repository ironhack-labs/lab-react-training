function IdCard(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', border: 'solid' }}>
      <span>
        <img src={props.picture}></img>
      </span>
      <span className="IdCard">
        <span className="firstName">
          <strong>Firstname:</strong> {props.firstName}
        </span>
        <br />
        <span className="lastName">
          <strong>Lastname:</strong> {props.lastName}
        </span>
        <br />
        <span className="gender">
          <strong>Gender:</strong> {props.gender}
        </span>
        <br />
        <span className="height">
          <strong>Height:</strong> {props.height}
        </span>
        <br />
        <span className="birthday">
          <strong>Birthday:</strong>
          {props.birth.toDateString()}
        </span>
        <br />
      </span>
    </div>
  );
}
export default IdCard;
