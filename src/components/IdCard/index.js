function IdCard(props) {
  return (
    <div className="Card">
      <img className="Image" src={props.picture} />
      <div className="Content">
        <p>
          <b>Last name:</b> {props.lastName}
        </p>
        <p>
          <b>First name:</b> {props.firstName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {props.birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
