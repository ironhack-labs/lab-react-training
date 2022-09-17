function IdCard(props) {
  return (
    <div className="IdCard">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>
        <b>Birth: </b>
        {props.birth ? props.birth.toDateString() : new Date()}
      </p>
    </div>
  );
}

export default IdCard;
