const IdCard = (props) => {
  return (
    <div className="p-1 mb-3" style={{border: '2px solid black'}}>
    <div className ="d-flex justify-content-between" style={{width:500}} >
        <img className="mx-2" style={{width:200 ,height:200}} src={props.picture} alt={props.picture} />
      <div className="d-flex flex-column h4"style={{width:300}} >
        <span>
          <b> First Name: </b>
          {props.firstName}
        </span>
        <span>
          <b>Last Name: </b>
          {props.lastName}
        </span>
        <span>
          <b>Gender: </b>
          {props.gender}
        </span>
        <span>
          <b>Height: </b>
          {props.height / 100}m
        </span>

        <span>
          <b>Birth: </b>
          {props.birth.toDateString()}
        </span>
      </div>
      </div>
      </div>
  );
};
export default IdCard;
