function IdCard (props) {
    return (
      <div className="IdCard">
        <img src={props.picture} alt="profile" width="200" />
        <div>
          <p>Last Name: {props.lastName}</p>
          <p>First Name: {props.firstName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Birth: {props.birth.toDateString()}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;
  