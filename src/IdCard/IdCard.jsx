import './IdCard.css'


const IdCard = ({ picture, firstName, lastName, gender, height, birth  }) => {

    return (
        <div className="idCard">
        <div>
          <img src={picture} alt="" />
        </div>
        <div>
          <p><strong>First name: </strong>{firstName}</p>
          <p><strong>Last name: </strong>{lastName}</p>
          <p><strong>Gender: </strong>{gender}</p>
          <p><strong>Height: </strong>{height}</p>
          <p><strong>Birth: </strong>{birth.toString()}</p>
        </div>
  
  
      </div>
  
    )
}

export default IdCard




