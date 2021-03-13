import React from 'react'
import P from 'prop-types'

const IdCard = ({firstName, lastName, gender, height, birth, picture})=>{
  let date = birth.toString().slice(0,15)
  return (
    <div className='card-container' style={{display: 'flex', flexDirection: 'row' }}>
    <div className="picture">
      <img src={picture} alt={picture}/>
    </div>
    <div className="text-container">
      <h6>First Name: {firstName}</h6>
      <h6>Last Name: {lastName}</h6>
      <h6>Gender: {gender}</h6>
      <h6>Height: {height}</h6>
      <h6>Birth: {date}</h6>
    </div>

    </div>
  )

}


IdCard.propTypes={
  firstName: P.string,
  lastName: P.string,
  gender: P.string,
  height: P.number,
  birth: P.object
}

export default IdCard;