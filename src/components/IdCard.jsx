
const IdCard = (props) => {
  return ( 
    <div className="container">
      <div>
        <img src={props.picture} alt="" />
      </div>
      <div>
        <p> <strong>First name:</strong> {props.firstName} </p>
        <p> <strong>Last name:</strong> {props.lastName} </p>
        <p> <strong>Gender:</strong> {props.gender} </p>
        <p> <strong>Height:</strong> {props.height}</p>
        <p> <strong>Birth:</strong> </p>
      </div>
    </div>
  );
}

export default IdCard;