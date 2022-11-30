import React from 'react'

const IdCard = ({picture, firstName, lastName, gender, height, birth}) => {


  return (
    <div className='comp id-card'>
      <img src={picture} alt={firstName+lastName}/>
      <section className='id-info'>
        <p>
          <strong>First name: </strong>{firstName}<br/>
          <strong>Last name: </strong>{lastName}<br/>
          <strong>Gender: </strong>{gender}<br/>
          <strong>Height: </strong>{height/100}m<br/>
          <strong>Birthdate: </strong>{birth}
        </p>
      </section>
    </div>
  )
}

export default IdCard