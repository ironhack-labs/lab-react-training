import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card">
      <div className="image">
        <img src={picture} />
      </div>
      <div className="body">
        <p><b>First name: </b>{firstName}</p>
        <p><b>Last name: </b>{lastName}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Height: </b>{height}</p>
        <p><b>Birth: </b>{birth.toDateString()}</p>
      </div>
    </div>
  )
}

IdCard.defaultProps = {
  lastName: '',
  firstName: '',
  gender: '',
  height: 0,
  birth: '',
  picture: ''
}

export default IdCard;