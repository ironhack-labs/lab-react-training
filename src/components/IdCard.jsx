


function IdCard(props) {
    return (
      <div  className="cards">
        <img className="image-cards"src={props.picture} alt="profile" />
        <div className="details-card">
        <span><b>First Name:</b>{props.lastName}</span>
        <span><b>Last Name:</b> {props.firstName}</span>
        <span><b>Gender:</b> {props.gender}</span>
        <span><b>Height:</b> {props.height}</span>
        <span><b>Birth: </b>{props.birth.toDateString()}</span>
        </div>
      </div>
    );
  }



  export default IdCard;


