import React, {Fragment} from 'react'



const IdCard = (props) => {

const {lastName, firstName, birth, gender, height, picture} = props
  return (

    <div className='IdCard'>
    <img src={picture} alt="Idfoto"></img>
    <div>
    <p><strong>LastName:</strong> {lastName}</p>
    <p><strong>FirstName:</strong>{firstName}</p>
    <p><strong>Birth:</strong>{birth.toString().slice(0,15)}</p>
    <p><strong>Gender:</strong>{gender}</p>
    <p><strong>Height:</strong>{height}</p>
    </div>
    </div>


  )
}

export default IdCard