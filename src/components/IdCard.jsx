function IdCard(props) {
  return (
    <div className='id-card'>
      <div className="id-card-image">
        <img src={props.picture} alt="id card img"/>
      </div> 
      <div className="id-card-body">
        <p><b>First name</b>: {props.firstName}</p>
        <p><b>Last name</b>: {props.lastName}</p>
        <p><b>Gender</b>: {props.gender}</p>
        <p><b>Height</b>: {props.height}</p>
        <p><b>Birth</b>: {props.birth.toDateString()}</p>
      </div> 
    </div>
  )
}

export default IdCard;