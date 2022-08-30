import './IdCard.css'

function IdCard({firstName,lastName,gender,height,birth,picture, className}) {



  function prettyDate(birth){    
    return birth.toDateString()
  }


  return(
    <div className={`${className}`}>
      <div className='col-2'>
        <img src={picture} alt={firstName} />
      </div>
      <div className='col-10 '>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height/100}m</p>
        <p><strong>Birth:</strong> {prettyDate}</p>
      </div>
    </div>
  )
}

export default IdCard