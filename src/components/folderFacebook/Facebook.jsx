function Facebook(props) {
  console.log(props)
  return (
    <div className="contenedor-IdCard">
      <div>
        <img src={props.profile.img} alt={`Foto de: ${props.profile.firstName}`} />
      </div>
      <div className="contenedor-info">
        <p className="style-p "><span className="bold">First Name: </span> { props.profile.firstName}</p>
        <p className="style-p "><span className="bold"> Last Name: </span>{ props.profile.lastName}</p>
        <p className="style-p "><span className="bold">Country: </span>{ props.profile.country} </p>
        <p className="style-p "><span className="bold">Type: </span> {props.profile.isStudent ? <span>Student</span> : <span>Teacher</span>}</p>
      </div>
    </div>
  )
}

export default Facebook