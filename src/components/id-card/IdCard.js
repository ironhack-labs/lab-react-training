import './IdCard.css'

function IdCard ({firstName, lastName, gender, height, birth, picture}) {
  const heightDiv = height/100 
  let dateStg = birth.toDateString()

  return (
    <div className="id-card-box d-flex border border-dark  my-3">{/**/}
      <img className='p-2' src={picture} alt={firstName} />
      <div className="id-card-info p-3">
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{heightDiv}m</p>
        <p><strong>Birth: </strong>{dateStg}</p>
      </div>
    </div>
  )
}

export default IdCard