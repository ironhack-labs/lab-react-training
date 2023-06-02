function IdCard(props) {
  console.log(props);
  return (
    <div className="id-card">
      <div className="img-card">
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div className="card-info">
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
