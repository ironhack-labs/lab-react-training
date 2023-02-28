import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;


    return (
    <div className='cardId'>
        <img className='imgcard' src={picture} alt="picture"/>
        <h1>First Name:{firstName}</h1>
        <h2>Last Name:{lastName}</h2>
        <h3>Gender:{gender}</h3>
        <h4>Height:{height}</h4>
        <p>Birth: {birth.toLocaleString()}</p>
    </div>
  )
}

export default IdCard