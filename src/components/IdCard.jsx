


function IdCard(props) {
    return (
      <div  className="cards">
        <img src={props.picture} alt="profile" />
        <p>First Name:{props.lastName}</p>
        <p>Last Name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toDateString()}</p>
        
      </div>
    );
  }



  export default IdCard;


