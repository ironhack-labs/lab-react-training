function IdCard(props) {
  return (
    <div key={props._id} className="id-card">
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toLocaleString()}</p>
      <img src={props.picture} alt="" />
    </div>
  );
}

export default IdCard;
