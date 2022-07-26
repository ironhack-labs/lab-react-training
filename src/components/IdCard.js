function IdCard(props) {
    const birthDate = String(props.birth).slice(0, 15);
  return (
    <div className="id-card border">
        <div>
            <img src={props.picture} alt="profile" />
        </div>
        <div>
      <p>
        <strong>First name:</strong>
        {props.lastName}
      </p>
      <p>
        <strong>Last name: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {props.height}
      </p>
      <p>
        <strong>Birth: </strong>
        {birthDate}
      </p>
        </div>
    </div>
  );
}

export default IdCard;
