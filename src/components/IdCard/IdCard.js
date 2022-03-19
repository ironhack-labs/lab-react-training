import './IdCard.scss'

function IdCard({ lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="card mt-5">      
      <div className='card__img'>
        <img src={picture} alt="" />
      </div>

      <div className="card__data">
        <p><strong>First name:</strong> {lastName}</p>
        <p><strong>Lasta name:</strong> {firstName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Birth:</strong> {birth.toString()}</p>
      </div>
      
    </div>
  )
}

export default IdCard