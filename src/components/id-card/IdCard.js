import "./IdCard.css"

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card d-flex flex-row my-2 mx-2">

      <img src={picture} alt="face" className="img" />

      <div className="d-flex flex-column m-1">
        <h6><b>First Name:</b> {firstName}</h6>
        <h6><b>Last Name:</b> {lastName}</h6>
        <h6><b>Gender:</b> {gender}</h6>
        <h6><b>Height:</b> {height / 100}m</h6>
        <h6><b>Birth:</b> {birth.toDateString()}</h6>
      </div>
    </div>
  )
};

export default IdCard;