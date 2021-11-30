function IdCard(props) {
  return (
    <div className="info-card">
      <div>
        <img id="photo" src={props.picture} alt="pic" />
      </div>
      <div className="inner-info">
        <p>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height.toString()}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
