import './IdCard.css'

function IdCard({ lastName, firstName, gender, height, birth, picture, className }) {
  return(
      <div className={`id-card d-flex border border-dark ${className}`}>
        <img src={picture} alt={`${firstName} ${lastName}`} className="p-2"/>
        <div className="d-flex flex-column pt-2">
          <h6><b>Fist Name</b>: {firstName}</h6>
          <h6><b>Last Name</b>: {lastName}</h6>
          <h6><b>Gender</b>: {gender}</h6>
          <h6><b>Heigh</b>: {height/100}m</h6>
          <h6><b>Birth</b>: {birth.toDateString()}</h6>
        </div>
      </div>
  )
}

export default IdCard;