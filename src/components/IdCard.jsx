import React from 'react'
import '../assets/css/IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture}) => {
    return (
      <div className='IdCard'>
          <div className='IdImg'>
            <img src={picture} alt=""/>
          </div>
          <div className='IdData'>
              <p><b>First name:</b> {firstName}</p>
              <p><b>Last name:</b> {lastName}</p>
              <p><b>Gender:</b> {gender}</p>
              <p><b>Height:</b> {height}</p>
              <p><b>Birth:</b> {birth}</p>
          </div>
      </div>
    )
  }

export default IdCard 