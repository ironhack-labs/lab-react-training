function IdCard(props) {
  return (
    <div style={{ display: 'flex', margin: '10px', border: '1px black solid' }}>
      <img src={props.picture} alt="profile" />
      <div>
        <p>
          <strong>First name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Gender:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
