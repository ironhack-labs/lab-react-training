function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  return (
    <div className="d-flex flex-row mb-3 border border-dark m-2 w-50">
      <div>
        <img className="m-2" src={picture} alt="Profile Picture" />
      </div>
      <div className="mt-2 text-start">
        <p className="m-0">First Name: {firstName}</p>
        <p className="m-0">Last Name: {lastName}</p>
        <p className="m-0">Gender: {gender}</p>
        <p className="m-0">Height: {height}</p>
        <p className="m-0">Birth: {birth}</p>
      </div>
    </div>
  )
};

IdCard.defaultProps = {
  firstName: "",
  lastName: "",
  gender: "",
  birth: "",
  picture: ""
};

export default IdCard;