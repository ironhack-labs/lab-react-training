function IdCard(props) {
    return (
      <div className="idCard-box">
        <img src={props.picture} alt={props.firstName} />
        <div className="text-data-idCard">
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height} cm</p>
            <p>Birth: {props.birth}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;