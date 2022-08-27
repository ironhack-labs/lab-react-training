import "./IdCard.css"

function IdCard({ lastName, firstName, gender, height, birth, picture}) {
  const heightM = height / 100
  let date = birth.toDateString()


  return(
    <div className="id-card d-flex flex-row">
      <img src={picture} alt={firstName} className="image m-1"/>
      <div className="d-flex flex-column mt-1">
        <h6><b>First name: </b>{firstName}</h6>
        <h6><b>Last name: </b>{lastName}</h6>
        <h6><b>Gender: </b>{gender}</h6>
        <h6><b>Heigth: </b>{heightM}m</h6> 
        <h6><b>Birth: </b>{date}</h6> 
      </div>
    </div>
  )
}

export default IdCard