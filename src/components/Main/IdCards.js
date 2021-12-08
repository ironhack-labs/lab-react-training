function IdCard(props) {
  return (
    <div className="IdCard">
      <img className= "img" src={props.picture} alt={props.firstName} />

        <strong>First Name:</strong>
        <p>{props.firstName}</p>
        <strong>Last Name:</strong>
        <p>{props.firstName}</p>
        <strong>Gender:</strong>
        <p>{props.gender}</p>
        <strong>Height:</strong>
        <p>{props.height}</p>
        <strong>Birth:</strong>
        <p>{props.birth}</p>
      </div>
  );
}

export default IdCard;
