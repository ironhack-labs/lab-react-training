function IdCard(props) {
  return (
    <div>
      <p className="lastName">{props.lastName}</p>
      <p className="firstName">{props.firstName}</p>
      <p className="gender">{props.gender}</p>
      <p className="height">{props.height}</p>
      <p className="birth">{props.birth}</p>
      <img className="picture" src={props.image} alt="picture"></img>
    </div>
  );
}

export default IdCard;
