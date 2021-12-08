function IdCard(props) {
  return (
    <div className="IdCard">
      <div>
        <img className="img" src={props.picture} alt={props.firstName} />
      </div>
      <div>
        <p>
          <strong>First Name:</strong>
          {props.firstName}
        </p>

        <p>
          <strong>Last Name:</strong>
          {props.firstName}
        </p>

        <p>
          <strong>Gender:</strong>
          {props.gender}
        </p>

        <p>
          <strong>Height:</strong>
          {props.height}
        </p>

        <p>
          <strong>Birth:</strong>
          {props.birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
