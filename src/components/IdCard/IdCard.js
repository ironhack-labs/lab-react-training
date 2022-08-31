import './IdCard.css'

function IdCard({firstName,lastName,gender,height,birth,picture, className}) {

let date = birth.toDateString()

  return(
    <div className={`${className}`}>
      <div className='col-2 p-0'>
        <img src={picture} alt={firstName} />
      </div>
      <div className='col-10  p-0'>
        <p className='m-0'><strong>First name:</strong> {firstName}</p>
        <p className='m-0'><strong>Last name:</strong> {lastName}</p>
        <p className='m-0'><strong>Gender:</strong> {gender}</p>
        <p className='m-0'><strong>Height:</strong> {height/100}m</p>
        <p className='m-0'><strong>Birth:</strong> {date} </p>
      </div>
    </div>
  )
}

export default IdCard