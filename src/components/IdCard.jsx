
function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  return (
    <div className="d-flex flex-row mb-3 border border-1 border-dark m-3">
      <div>
        <img className="m-2" src={picture} alt="ProfilePicture" />
      </div>
      <div className="mt-2">
        <p className="m-0"><b> First Name: </b> {firstName}</p>
        <p className="m-0"><b> Last Name: </b> {lastName}</p>
        <p className="m-0"><b> Gender: </b> {gender}</p>
        <p className="m-0"><b> Height: </b> {height}</p>
        <p><b> Birth: </b> {birth}</p>
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
  picture: '',
}

export default IdCard