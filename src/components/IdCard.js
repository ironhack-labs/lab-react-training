
function IdCard(props) {
  return (
    <div className="card">
      <div>
        <img src={props.picture} alt="image" />
      </div>
      <div>
        <p><b> First Name: </b> {props.firstName}</p>
        <p><b> Last Name: </b> {props.lastName}</p>
        <p><b> Gender: </b> {props.gender}</p>
        <p><b> Height: </b> {props.height}</p>
        <p><b> Birth: </b> {props.birth}</p>
      </div>
    </div>
    
  )


}


IdCard.defaultProps = {
  firstName: '',
  lastName: '',
  gender: '',
  height: '',
  birth: '',
}

export default IdCard