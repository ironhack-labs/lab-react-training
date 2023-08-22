function IdCard(props){

  return (
    <div className="list">
      <p>Firstname: {props.firstName}</p>
      <p>Lastname: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
      <img src={`${props.picture}`} alt="" />
    </div>
  )
}

export default IdCard;