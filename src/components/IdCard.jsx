


function IdCard(props) {
  return (
    <div>
      <img src={props.picture}></img>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  )
}

export default IdCard
