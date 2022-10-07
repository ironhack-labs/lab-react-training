function IdCard(props) {
  return (
    <div className="idcard">
      <img src={props.picture} alt="face" />
      <div className="text-holder">
        <span>Last name: {props.lastName}</span>
        <span>First name: {props.firstName}</span>
        <span>Gender: {props.gender}</span>
        <span>Height: {props.height}</span>
        <span>Birth date: {props.birth}</span>
      </div>
    </div>
  )
}

export default IdCard;