function IdCard(props) {
  return (
      <div className="id-card">
        <img src={props.picture} className="id-img" alt={props.firstName + ' Face'} />
        <span className="id-info">
          <p><b>First name:</b> {props.firstName}</p>
          <p><b>Last name:</b> {props.lastName}</p>
          <p><b>Gender:</b> {props.gender}</p>
          <p><b>Height:</b> {props.height}</p>
          <p><b>Birth:</b> {props.birth.toDateString()}</p>
        </span>
      </div>
  )
}
 
export default IdCard;