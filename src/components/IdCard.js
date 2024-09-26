function IdCard(props) {
  return (
    <div className="IdCard">
      <div className="pic">
        <img src={props.picture} alt="Profile" />
      </div>
      <div className="user">
        <p>
          <b>First name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Birth: </b>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
