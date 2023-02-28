function IdCard(props) {
  return (
    <div>
      <p>Last Name: {props.user.lastName}</p>
      <p>First Name: {props.user.firstName}</p>
      <p>Gender: {props.user.gender}</p>
      <p>Height: {props.user.height}</p>
      <p>Birth: {props.user.birth}</p>
      <p>Picture:</p> <img src={props.user.picture} alt="profile" />
    </div>
  );
}

export default IdCard;
