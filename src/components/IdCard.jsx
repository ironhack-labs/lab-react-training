function IdCard(props) {
  return (
    <div>
      <div>
        <img src={props.picture} alt="Profile" />
      </div>
      <div>
        <p>
          <span>First Name: </span>
          {props.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {props.lastName}
        </p>
        <p>
          <span>Gender: </span>
          {props.gender}
        </p>
        <p>
          <span>Height: </span>
          {props.height}
        </p>
        <p>
          <span>Birth: </span>
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
