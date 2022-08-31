function IdCard(props) {

  let date = props.birth.toDateString() 
  
  return(
    <div className="id-card">
      <img src={props.picture} alt="idPhoto"/>
      First name: {props.firstName}
      Last name: {props.lastName}
      Gender: {props.gender}
      Height: {props.height}
      Birth: {date}
    </div>
  )
}

export default IdCard;