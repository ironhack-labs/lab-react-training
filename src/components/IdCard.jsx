function IdCard(props) {
    return (
      <div className="idCard-box">
        <img src={props.picture} alt={props.firstName} />
        <div className="text-data-idCard">
            <p><span className="text-bold">First name: </span><span>{props.firstName}</span></p>
            <p><span className="text-bold">Last name: </span><span>{props.lastName}</span></p>
            <p><span className="text-bold">Gender: </span><span>{props.gender}</span></p>
            <p><span className="text-bold">Height: </span><span>{props.height} cm</span></p>
            <p><span className="text-bold">Birth: </span><span>{props.birth}</span></p>
        </div>
      </div>
    );
  }
  
  export default IdCard;