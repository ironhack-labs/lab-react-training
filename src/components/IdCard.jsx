import React from 'react'
const IdCard = ({lastName, firstName, gender, height, birth,picture}) => {
  const days = ['Sun','Monday','thusday', 'wednesday', 'thursday', 'friday', 'saturday']
    return (

    <div className='conteiner'>
        <img className='photo' src={picture}/>
        <div className=''>
        <p>
           <span>Last mame:</span> {lastName}
            
        </p>
        <p>
        <span>First name:</span> {firstName}
        </p>
        <p>
            <span>Gender:</span> {gender}
        </p>
        <p>
            <span>Height:</span> {height}
        </p>
        <p>
            <span>Birth:</span> {days[birth.getDay()]} {birth.getMonth()} {birth.getDate()} {birth.getFullYear()}
        </p>
        </div>
            
      
    </div>
  )
}

export default IdCard
