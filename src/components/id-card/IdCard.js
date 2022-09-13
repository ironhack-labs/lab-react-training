import "./IdCard.css"

function IdCard({ lastName, firstName, gender, height, birth, picture, className}) {
  return(
    <div className={`container id-card my-2 gap-2 d-flex flex-row ${className} ms-n5`}>
      <img src={picture} alt={firstName} className="image my-2"/>
      <div className="d-flex flex-column mt-2">
        <h5><b>First name: </b>{firstName}</h5>
        <h5><b>Last name: </b>{lastName}</h5>
        <h5><b>Gender: </b>{gender}</h5>
        <h5><b>Heigth: </b>{height / 100}m</h5> 
        <h5><b>Birth: </b>{birth.toDateString()}</h5> 
      </div>
    </div>
  )
}

IdCard.defaulProps = {
  className: ""
}

export default IdCard