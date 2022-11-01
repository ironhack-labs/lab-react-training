function IdCard(props) {  
  return (
    <div className="IdCard">
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
      <div className="IdData">
        <span className="bolder">First name: </span>
        <span>{props.firstName}</span>
        <br />
        <span className="bolder">Last name: </span>
        <span>{props.lastName}</span>
        <br />
        <span className="bolder">Gender: </span>
        <span>{props.gender}</span>
        <br />
        <span className="bolder">Height: </span>
        <span>{props.height}</span>
        <br />
        <span className="bolder">Birth: </span>
        <span>{props.birth.toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default IdCard;
