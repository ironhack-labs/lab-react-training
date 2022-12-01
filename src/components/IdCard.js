import React from 'react'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
  return (
    <div className='idCard'>
        <img src={picture} alt="" className='img1'/>
        <div className='izq'>
            <p className='izq'><strong>First Name:</strong>{firstName}</p>
            <p className='izq'><strong>Last Name:</strong>{lastName}</p>
            <p className='izq'><strong>Gender:</strong>{gender}</p>
            <p className='izq'><strong>Height:</strong>{height}</p>
            <p className='izq'><strong>Birth:</strong>{birth}</p>
        </div>
    </div>
  )
}

export default IdCard