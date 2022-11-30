import React from 'react'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
  return (
    <div className='idCard'>
        <img src={picture} alt=""/>
        <div>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Birth:</strong> {birth}</p>
        </div>
    </div>
  )
}

export default IdCard