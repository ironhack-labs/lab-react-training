function IdCard(props) {
  return (
    <div className="IdCard">
      <div>
        <img src={props.picture} alt="picture" />
      </div>
      <p>First Name: {props.firstName} </p>
      <p>Last Name: {props.lastName} </p>
      <p>Gender: {props.gender} </p>
      <p>Height: {props.height} </p>
      <p>Birth: {props.birth.toISOString()} </p>
    </div>
  );
}

export default IdCard;
